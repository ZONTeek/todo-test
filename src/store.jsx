import massagesReducer from "./massagesReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    massagesReducer: massagesReducer,
});

let store = createStore(reducers);

export default store;