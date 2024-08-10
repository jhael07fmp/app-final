export const apiUrl = (endpoint: string) =>
  `${process.env.EXPO_PUBLIC_API_URL}/${endpoint}`;
