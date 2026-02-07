import { createStore } from "redux";
import { countReducer } from "./Reducers/CountReducer";

const store = createStore(countReducer);

export default store;
