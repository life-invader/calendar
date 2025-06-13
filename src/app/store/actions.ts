import type { StoreType } from "./index"

export const loginAction = (state: StoreType) => state.login;
export const logoutAction = (state: StoreType) => state.logout;
export const fetchGuestsAction = (state: StoreType) => state.fetchGuests;
export const createEventAction = (state: StoreType) => state.createEvent;
