import type { StateCreator } from 'zustand'
import type { IAuthSlice } from './types'

export const createAuthSlice: StateCreator<
  IAuthSlice,
  [],
  [],
  IAuthSlice
> = (set) => ({
  isAuth: false,
  setAuth: (authState: boolean) => set({ isAuth: authState }),
})