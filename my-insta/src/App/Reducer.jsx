import { combineReducers } from "redux";
import { userSlice } from "../Feature/UserSlice";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
})