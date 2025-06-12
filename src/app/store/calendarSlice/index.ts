import type { StateCreator } from 'zustand'
import type { IEventSlice } from './types'
import type { IAuthSlice, IUser } from '@store/authSlice/types'

export const createCalendarSlice: StateCreator<
  IEventSlice & IAuthSlice,
  [],
  [],
  IEventSlice
> = (set) => ({
  guests: [],
  events: [],
  setGuests: () => { set({}) },
  setEvents: () => { set({}) },
  fetchGuests: async () => {
    try {
      const response = await fetch("./public/json/users.json");
      const guests: IUser[] = await response.json();
      set({ guests })
    } catch {
      console.error("[EventSlice]: Ошибка получения гостей")
    }
  },
})