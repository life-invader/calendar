export interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
}

export interface IAuthSlice {
  // state
  isInitialAuthCheckingComplete: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;

  // actions
  login: (credentials: { username: string, password: string }) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}