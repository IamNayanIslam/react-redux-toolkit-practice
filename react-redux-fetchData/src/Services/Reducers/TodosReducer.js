import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../Constants/TodosConstants";

export const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todosReducer = (state = initialTodosState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
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
