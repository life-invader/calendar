import type { StateCreator } from 'zustand'
import type { IAuthSlice, IUser } from './types'
import type { IEventSlice } from '@store/calendarSlice/types'

export const createAuthSlice: StateCreator<
  IAuthSlice & IEventSlice,
  [],
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
  login: async ({ username, password }) => {
    try {
      set({ isLoading: true })

      setTimeout(async () => {
        const response = await fetch("./public/json/users.json");
        const users: IUser[] = await response.json();
        const mockUserFromJson = users.find((user) => user.username === username && user.password === password);

        if (mockUserFromJson) {
          set({ isLoading: false, isAuthenticated: true, user: mockUserFromJson });
          localStorage.setItem("username", username);
        } else {
          set({ isLoading: false, errorMsg: "Пользователь не найден" });
        }
      }, 1000)
    } catch {
      set({ isLoading: false, errorMsg: "Ошибка сервера" });
    }
  },
  logout: () => {
    localStorage.removeItem("username");
    set({ isAuthenticated: false, user: null });
  },
  checkAuth: () => {
    const username = localStorage.getItem("username");

    if (!username) {
      set({ isInitialAuthCheckingComplete: true });
      console.debug("[AuthSlice]: Не авторизован")

      return;
    }

    setTimeout(async () => {
      const response = await fetch("./public/json/users.json");
      const users: IUser[] = await response.json();
      const mockUserFromJson = users.find((user) => user.username === username);

      if (mockUserFromJson) {
        set({ isInitialAuthCheckingComplete: true, isAuthenticated: true, user: mockUserFromJson });
        localStorage.setItem("username", username);
        console.debug("[AuthSlice]: Авторизован")
      } else {
        set({ isAuthenticated: false });
        console.debug("[AuthSlice]: Пользователь не найлен")
      }
    }, 1000)
  }
})
