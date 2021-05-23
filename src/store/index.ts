import { combineReducers } from "redux";

import companiesReducer, { initialState } from "./companies/reducers";

export const rootReducer = combineReducers({
  companies: companiesReducer,
});

const State = {
  companies: initialState,
};

export type RootState = typeof State;
