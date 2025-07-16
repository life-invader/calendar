import type { IUser } from "@shared/index";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

/**
 * Базовый API-класс для GET-запросов
 */
class ApiInstance {
  private async _fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Ошибка сети: ${(error as Error).message}`);
    }
  }

  /**
   * GET-запрос
   */
  get = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    return this._fetch<T>(endpoint, options);
  };
}

/**
 * API-класс для авторизации
 */
class AuthInstance {
  /**
   * Вход пользователя
   */
  login = async (credentials: Pick<IUser, "username" | "password">): Promise<IUser> => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        credentials: "same-origin",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error(`Ошибка авторизации: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Ошибка сети: ${(error as Error).message}`);
    }
  };

  /**
   * Проверка токена
   */
  check = async (accessToken: string): Promise<Response> => {
    return fetch(`${API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  };
}

export const apiInstance = new ApiInstance();
export const authInstance = new AuthInstance();
