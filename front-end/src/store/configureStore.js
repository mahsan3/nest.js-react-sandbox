import {createStore, applyMiddleware, compose} from "redux";
import {rootEpic, rootReducer} from "./reducers";
import { createEpicMiddleware } from 'redux-observable';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialStore) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialStore,
        composeEnhancers(applyMiddleware(
            reduxImmutableStateInvariant(),
            epicMiddleware
        ))
    );

    epicMiddleware.run(rootEpic);

    return store;

}
