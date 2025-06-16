import type { IUserSlice } from "./types";

export const selectEvents = (state: IUserSlice) => state.users;