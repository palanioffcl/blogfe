import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./rootsaga";
import { compose } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(RootSaga);


export default store;