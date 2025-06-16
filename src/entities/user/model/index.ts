import { create } from 'zustand'
import type { IUserSlice } from './types'

export const useUserSlice = create<IUserSlice>(() => ({
  users: [],
}))