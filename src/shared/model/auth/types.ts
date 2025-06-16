import type { IUser } from "@shared/lib/types";

export interface IAuthSlice {
  isInitialAuthCheckingComplete: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  errorMsg: string | null;
  login: (credentials: { username: string, password: string }) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}