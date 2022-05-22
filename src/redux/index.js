import { combineReducers } from "redux";
import { counter } from "./reducers/countReduces";
import todoReducer from "./reducers/todoAddReduces";

const reducers = combineReducers({
  counter,
  todoReducer,
});
export default reducers;
