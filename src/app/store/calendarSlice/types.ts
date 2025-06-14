import type { IEvent, IUser } from "@shared/lib/types";

export interface IEventSlice {
  guests: IUser[];
  events: IEvent[];
  fetchGuests: () => Promise<void>;
  fetchEvents: () => void;
  createEvent: (newEvent: Omit<IEvent, "author">) => void;
}