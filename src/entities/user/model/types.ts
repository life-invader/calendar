import type { IUser } from "@shared/index";

export interface IUserSlice {
  users: IUser[];
}

export interface IApiUsers {
  limit: number;
  skip: number;
  total: number;
  users: IUser[];
}