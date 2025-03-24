import { combineReducers } from "redux";
import loaderReducer from "./loader/reducer";
import loginReducer from "./login/reducer";

const rootReducer = combineReducers({
  loader: loaderReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
