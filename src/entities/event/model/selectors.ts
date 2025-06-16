import type { IEventSlice } from "./types";

export const selectEvents = (state: IEventSlice) => state.events;