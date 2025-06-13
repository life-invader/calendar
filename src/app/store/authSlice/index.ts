import type { StateCreator } from 'zustand'
import type { IAuthSlice } from './types'
import type { IEventSlice } from '@store/calendarSlice/types'
import type { IUser } from '@shared/lib/types'

export const createAuthSlice: StateCreator<
  IAuthSlice & IEventSlice,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  IAuthSlice
> = (set) => ({
  // state
  isInitialAuthCheckingComplete: false,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMsg: null,

  // actions
  login: async (credentials) => {
    try {
      set({ isLoading: true })

      const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        credentials: "same-origin",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const user: IUser = await response.json();
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

      const response = await fetch('https://dummyjson.com/auth/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log(response)

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
})
