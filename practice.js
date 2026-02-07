//constants

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCESS = "GET_TODOS_SUCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";

//initial state

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

//actions

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCESS,
    payload: todos,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(TODOS_API_URL)
      .then((res) => {
        const todos = res.data;
        dispatch(getTodosSuccess(todos));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getTodosFailed(errorMessage));
      });
  };
};

//reducer

const todosReducer = (
  state = initialTodosState,
  { type, payload } = action,
) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };

    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

//store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());
store.dispatch(fetchData());
