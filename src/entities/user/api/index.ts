import { apiInstance } from "@shared/api/apiInstance";
import { useUserSlice } from "../model";
import type { IApiUsers } from "../model/types";

/**
 * Загружает пользователей, которых можно добавить в качестве участников события
 */
export const fetchUsers = async () => {
  const data = await apiInstance.get<IApiUsers>("/users");
  useUserSlice.setState({ users: data.users });
}
