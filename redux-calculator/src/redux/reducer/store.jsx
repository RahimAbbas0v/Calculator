import { combineReducers } from "redux";
import { counterReducer } from "./counterreducer";
export const rootReducer=combineReducers({
    counterReducer,
})