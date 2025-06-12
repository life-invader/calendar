import { create } from 'zustand'
import { createAuthSlice } from './authSlice'
import type { IAuthSlice } from './authSlice/types'

export const useStore = create<IAuthSlice>()((...args) => ({
  ...createAuthSlice(...args),
}))