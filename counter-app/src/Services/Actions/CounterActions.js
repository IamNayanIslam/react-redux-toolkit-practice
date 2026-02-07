import {
  DECREMENT,
  DECREMENT_BY_VALUE,
  INCREMENT,
  INCREMENT_BY_VALUE,
  REST,
} from "../Constants/CounterConstants";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: REST,
  };
};

export const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

export const decrementByValue = (value) => {
  return {
    type: DECREMENT_BY_VALUE,
    payload: value,
  };
};
