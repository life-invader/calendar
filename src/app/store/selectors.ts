import type { StoreType } from "./index"

export const selectAuthSlice = (state: StoreType) => state.isAuthenticated;
export const selectIsAuth = (state: StoreType) => state.isAuthenticated;
export const selectGuests = (state: StoreType) => state.guests;
export const selectIsLoading = (state: StoreType) => state.isLoading;
export const selectAuthErrorMsg = (state: StoreType) => state.errorMsg;
