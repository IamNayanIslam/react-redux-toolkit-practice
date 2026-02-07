import { useEffect } from "react";
import { fetchData } from "../../Services/Actions/TodosActions";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(todos);
  return (
    <>
      <div className="w-full py-10 flex flex-wrap gap-4 px-10 justify-center items-center ">
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>Something Went Wrong</h3>}
        {todos &&
          todos.slice(0, 28).map((todo) => {
            return (
              <div
                key={todo.id}
                className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
              >
                <SingleTodo todo={todo} />
              </div>
            );
          })}
      </div>
      ;
    </>
  );
};

export default Todos;
