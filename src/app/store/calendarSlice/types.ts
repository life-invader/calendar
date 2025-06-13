import type { IEvent, IUser } from "@shared/lib/types";

export interface IEventSlice {
  guests: IUser[];
  events: IEvent[];
  setGuests: () => void;
  setEvents: () => void;
  fetchGuests: () => Promise<void>;
  createEvent: (newEvent: Omit<IEvent, "author">) => void;
}