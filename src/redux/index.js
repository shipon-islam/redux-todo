import { combineReducers } from "redux";
import todoReducer from "./reducers/todoAddReduces";

const reducers = combineReducers({

  todoReducer,
});
export default reducers;
