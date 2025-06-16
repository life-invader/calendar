import type dayjs from "dayjs";
import type { IEvent } from "@shared/lib/types";

export interface IEventSlice {
  events: IEvent[];
}

export interface INewEvent {
  guests: string[];
  date: dayjs.Dayjs;
  description: string;
}
