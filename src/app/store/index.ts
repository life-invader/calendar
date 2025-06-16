import { create } from 'zustand'
import { createAuthSlice } from './authSlice'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import type { IAuthSlice } from './authSlice/types'

export type StoreType = IAuthSlice;

export const useStore = create<StoreType>()(
  devtools(
    immer((...args) => ({
      ...createAuthSlice(...args),
    }))
  )
);
