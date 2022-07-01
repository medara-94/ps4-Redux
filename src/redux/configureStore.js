import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  //Add support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    // This warn us if we accidentally mutate Redux State
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
