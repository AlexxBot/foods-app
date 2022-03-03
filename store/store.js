import { composeWithDevTools } from "redux-devtools-extension";
import createMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSaga);

const makeStore = () => store

export const wrapper = createWrapper(makeStore)