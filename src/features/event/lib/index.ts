import type { IUser } from "@shared/index";

export const formatUsersForSelect = (users: IUser[]) => {
  return users.map((user) => ({
    value: user.id,
    label: `${user.firstName} ${user.lastName}`,
  }))
}
