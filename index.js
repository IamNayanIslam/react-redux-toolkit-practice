const { createStore } = require("redux");

//CONSTANTS

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: ["nayan"],
  numberOfUsers: 1,
};

//action
//INCREMENT-COUNTER
//DECREMENT-COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};

const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const addNewUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// create reducer for counter

const counterReducer = (
  state = initialCounterState,
  { type, payload } = action,
) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, { type, payload } = action) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
        numberOfUsers: state.numberOfUsers + 1,
      };

    default:
      return state;
  }
};

//store - getState(), dispatch(), subscribe()

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());
store.dispatch(addNewUser("Hiya"));

// store.dispatch(incrementByValue(5));
// store.dispatch(incrementByValue(5));
// store.dispatch(incrementByValue(5));
// store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
