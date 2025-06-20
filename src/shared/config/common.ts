export const AppRoutePath = {
  home: "/",
  login: "/login",
  any: "*",
} as const;

export const formValidationRules = {
  required: {
    required: true,
    message: 'Заполните поле!',
  },
};