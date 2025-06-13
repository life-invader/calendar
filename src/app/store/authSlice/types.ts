import type { IUser } from "@shared/lib/types";

export interface IAuthSlice {
  // state
  isInitialAuthCheckingComplete: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  errorMsg: string | null;

  // actions
  login: (credentials: { username: string, password: string }) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}