import type { StoreType } from "./index"

export const selectIsAuth = (state: StoreType) => state.isAuthenticated;