import type { StateCreator } from 'zustand'
import type { IAuthSlice, IUser } from './types'

export const createAuthSlice: StateCreator<
  IAuthSlice,
  [],
  [],
  IAuthSlice
> = (set) => ({
  isAuth: false,
  user: null,
  isLoading: false,
  error: "",
  login: async ({ username, password }) => {
    try {
      set({ isLoading: true })

      setTimeout(async () => {
        const response = await fetch("./public/json/users.json");
        const users: IUser[] = await response.json();
        const mockUserFromJson = users.find((user) => user.username === username && user.password === password);

        if (mockUserFromJson) {
          set({ isLoading: false, isAuth: true, user: mockUserFromJson });
          localStorage.setItem("username", username);
        } else {
          set({ isLoading: false, error: "Пользователь не найден" });
        }
      }, 1000)
    } catch {
      set({ isLoading: false, error: "Ошибка логина" });
    }
  },
  logout: () => {
    localStorage.removeItem("username");
    set({ isAuth: false, user: null });
  },
})