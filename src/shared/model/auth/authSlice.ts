import { create } from 'zustand'
import { authInstance } from '@shared/index';
import type { IAuthSlice } from './types'
import type { IUser } from '../types';

export const useAuthSlice = create<IAuthSlice>((set) => ({
  isInitialAuthCheckingComplete: false,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMsg: null,

  login: async (credentials) => {
    try {
      set({ isLoading: true })
      const user: IUser = await authInstance.login(credentials);

      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("refreshToken", user.refreshToken);

      set({ isLoading: false, isAuthenticated: true, user, })
    } catch {
      set({ isLoading: false, errorMsg: "Ошибка сервера" })
    }
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isAuthenticated: false, user: null })
  },
  checkAuth: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        set({ isInitialAuthCheckingComplete: true, isAuthenticated: false, })
        return
      }

      const response = await authInstance.check(accessToken);

      if (!response.ok) {
        set({ isInitialAuthCheckingComplete: true, isAuthenticated: false, })
        return;
      }

      const user: IUser = await response.json();
      set({ isInitialAuthCheckingComplete: true, isAuthenticated: true, user: user })
    } catch {
      set({ isInitialAuthCheckingComplete: true, isAuthenticated: false, })
    }
  },
}));
