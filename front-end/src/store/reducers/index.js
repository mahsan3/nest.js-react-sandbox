import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import {primeMedianReducer} from "./median-prime.reducer";
import {loadMedianValues} from "../epics/median-prime.epics";

export const rootEpic = combineEpics(
    loadMedianValues
);

export const rootReducer = combineReducers({
    primeMedianReducer
});
