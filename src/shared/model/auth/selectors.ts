import type { IAuthSlice } from "./types";

export const selectIsInitialAuthCheckingComplete = (state: IAuthSlice) => state.isInitialAuthCheckingComplete;
export const selectIsAuthenticated = (state: IAuthSlice) => state.isAuthenticated;
export const selectIsLoading = (state: IAuthSlice) => state.isLoading;
export const selectUser = (state: IAuthSlice) => state.user;
export const selectErrorMsg = (state: IAuthSlice) => state.errorMsg;

export const selectLoginAction = (state: IAuthSlice) => state.login;
export const selectLogoutAction = (state: IAuthSlice) => state.logout;
export const selectCheckAuthAction = (state: IAuthSlice) => state.checkAuth;