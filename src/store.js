import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

//use it like below when using react-Devtools (need to import compse from react) 
// compose(  
// applyMiddleware(...middleware),
// )

export default store;
