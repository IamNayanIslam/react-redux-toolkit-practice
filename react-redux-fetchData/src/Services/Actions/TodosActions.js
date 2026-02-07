import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  TODOS_API_URL,
} from "../Constants/TodosConstants";

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

export const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

export const fetchData = () => async (dispatch) => {
  dispatch(getTodosRequest());
  try {
    const res = await axios.get(TODOS_API_URL);
    dispatch(getTodosSuccess(res.data));
  } catch (error) {
    const errorMessage = error.message;
    dispatch(getTodosFailed(errorMessage));
  }
};
