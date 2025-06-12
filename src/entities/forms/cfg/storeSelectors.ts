import type { StoreType } from "@store/index";

export const authSliceSelector = (state: StoreType) => ({
  login: state.login,
  isLoading: state.isLoading,
  loginErrorMsg: state.errorMsg,
});