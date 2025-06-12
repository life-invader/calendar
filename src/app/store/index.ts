import { create } from 'zustand'
import { createAuthSlice } from './authSlice'
import { createCalendarSlice } from './calendarSlice'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import type { IAuthSlice } from './authSlice/types'
import type { IEventSlice } from './calendarSlice/types'

export type StoreType = IAuthSlice & IEventSlice;

export const useStore = create<StoreType>()(
  devtools(
    immer((...args) => ({
      ...createAuthSlice(...args),
      ...createCalendarSlice(...args),
    }))
  )
);
