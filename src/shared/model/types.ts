export interface IUser {
  accessToken: string;
  refreshToken: string;
  email: string;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
}

export interface IEvent {
  author: string;
  guests: string[];
  date: string;
  description: string;
}
