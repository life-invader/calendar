import type { StateCreator } from 'zustand'
import type { IEventSlice } from './types'
import type { IAuthSlice } from '@store/authSlice/types'
import type { IEvent, IUser } from '@shared/lib/types'

interface IApiUsers {
  users: IUser[],
}

export const createCalendarSlice: StateCreator<
  IEventSlice & IAuthSlice,
  [],
  [],
  IEventSlice
> = (set, get) => ({
  guests: [],
  events: [],
  setGuests: () => { set({}) },
  setEvents: () => { set({}) },
  fetchGuests: async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const { users: guests }: IApiUsers = await response.json();
      set({ guests })
    } catch {
      console.error("[EventSlice]: Ошибка получения гостей")
    }
  },
  createEvent: (event) => {
    console.log(event)

    const newEvent: IEvent = {
      ...event,
      author: get().user?.username,
    }

    set((state) => ({ events: [...state.events, newEvent] }))
    localStorage.setItem("events", JSON.stringify(get().events))
  }
})