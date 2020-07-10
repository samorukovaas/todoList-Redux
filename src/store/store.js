import { createStore, combineReducers } from "redux";
import counterReducer from "../Containers/Counter/reducer";
import mainReducer from "../Containers/Main/reducer";

const rootReducer = combineReducers({
  main: mainReducer,
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
