import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/auth-reducer";
import { registerReducer } from "../reducers/register-reducer";
import { resourcesReducer } from "../reducers/resources-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        auth: authReducer,
        register: registerReducer,
        resources: resourcesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;