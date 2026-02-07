const SingleTodo = ({ todo }) => {
  return (
    <div className="py-4 px-2 bg-gray-600 rounded-md flex gap-2 justify-center items-center h-24 w-full items-start">
      <span className="font-bold text-white">{todo.id}</span>
      <h3 className="text-white line-clamp-2 leading-tight">{todo.title}</h3>
    </div>
  );
};

export default SingleTodo;
