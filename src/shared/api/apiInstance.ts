import type { IUser } from "@shared/index";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

class ApiInstance {
  get = async <T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data: T = await response.json();

    return data;
  }
}

class AuthInstance {
  login = async (credentials: Pick<IUser, "username" | "password">) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      credentials: "same-origin",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const user: IUser = await response.json();

    return user;
  }

  check = async (accessToken: string) => {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response;
  }
}

export const apiInstance = new ApiInstance();
export const authInstance = new AuthInstance();
