import { createSlice } from "@reduxjs/toolkit";
import ClientSocket from "../socket.io/ClientSocket";
import { AppState } from "./store";

export interface User {
	id: string;
}

export interface AuthState {
	user: User;
	socket: ClientSocket;
}

// Initial state
const initialState: AuthState = {
	user: { id: "" },
	socket: new ClientSocket(),
};

// Actual Slice
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
	// // Special reducer for hydrating the state. Special case for next-redux-wrapper
	// extraReducers: {
	// 	[HYDRATE]: (state: any, action: { payload: { auth: any } }) => {
	// 		return {
	// 			...state,
	// 			...action.payload.auth,
	// 		};
	// 	},
	// },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: AppState) => state.auth.user;
export const selectSocket = (state: AppState) => state.auth.socket;

export default authSlice.reducer;
