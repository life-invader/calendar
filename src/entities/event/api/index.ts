import { useEventSlice } from "../model";
import type { IEvent } from "@shared/lib/types";
import type { INewEvent } from "../model/types";

/**
 * Загружает список событий
 */
export const fetchEvents = () => {
  const events = JSON.parse(localStorage.getItem('events') || '[]') as IEvent[];
  useEventSlice.setState({ events });
}

/**
 * Создает новое событие
 */
export const createEvent = (event: INewEvent) => {
  const { setState, getState } = useEventSlice;

  const newEvent: IEvent = {
    ...event,
    date: event.date.format('YYYY-MM-DD'),
    author: "123123",
  };

  setState({ events: [...getState().events, newEvent] });
  localStorage.setItem("events", JSON.stringify(getState().events));
}
