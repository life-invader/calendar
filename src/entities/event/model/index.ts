import { create } from 'zustand'
import type { IEventSlice } from './types'

export const useEventSlice = create<IEventSlice>(() => ({
  events: [],
}));
