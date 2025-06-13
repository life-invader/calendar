export interface IUser {
  accessToken: string;
  refreshToken: string;
  email: string;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
}

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