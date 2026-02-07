import {
  DECREMENT,
  DECREMENT_BY_VALUE,
  INCREMENT,
  INCREMENT_BY_VALUE,
  REST,
} from "../Constants/CounterConstants";

const initialCountState = {
  count: 0,
};

export const countReducer = (state = initialCountState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case REST:
      return {
        ...state,
        count: 0,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + payload,
      };

    case DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - payload,
      };

    default:
      return state;
  }
};
