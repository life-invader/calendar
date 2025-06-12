import type { IEvent } from "@shared/lib/types";
import type { IUser } from "@store/authSlice/types";

export interface IEventSlice {
  guests: IUser[];
  events: IEvent[];
  setGuests: () => void;
  setEvents: () => void;
  fetchGuests: () => Promise<void>;
}