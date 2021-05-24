import { combineReducers } from "redux";
import { initialState, imageReducers } from "./images/reducers";

export const rootReducer = combineReducers({
  images: imageReducers,
});

const State = {
  images: initialState,
};

export type RootState = typeof State;
