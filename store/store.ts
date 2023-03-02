import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: authSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// *just leaving the wrapper here as a reference for how to create a next-redux-wrapper in a possible future
export const wrapper = createWrapper<AppStore>(makeStore);

export const store = makeStore();
