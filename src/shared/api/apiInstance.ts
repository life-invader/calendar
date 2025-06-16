export const API_URL = 'https://dummyjson.com'

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

export const apiInstance = new ApiInstance();
