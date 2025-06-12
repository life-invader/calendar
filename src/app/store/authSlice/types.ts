export interface IUser {
  username: string;
  password: string;
}

export interface IAuthSlice {
  isAuth: boolean;
  user: IUser | null;
  isLoading: boolean;
  error: string;
  login: (credentials: { username: string, password: string }) => Promise<void>;
  logout: () => void;
}