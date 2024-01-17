import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
import { store } from '../index';
import { columnReducer } from "./columnReducer";
import { rateReducer } from "./rateReducer";

export const rootReducer = combineReducers({
    student: studentReducer,
    column: columnReducer,
    rate: rateReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch