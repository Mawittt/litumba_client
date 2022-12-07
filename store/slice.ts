import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface AuthState {
	authState: boolean;
    user : object
}

// Initial state
const initialState: AuthState = {
	authState: false,
    user : {name : "jason bond"}
};

// Actual Slice
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// Action to set the authentication status
		setAuthState(state, action) {
			state.authState = action.payload;
		},
        setUser(state, action){
            state.user = action.payload
        }
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

export const { setAuthState , setUser } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectUser = (state : AppState) => state.auth.user

export default authSlice.reducer;
