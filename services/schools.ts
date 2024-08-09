import { School } from "@/types";

const apiUrl = (queryParam: string) =>
  `${process.env.EXPO_PUBLIC_API_URL}minerd/centros.php?regional=${queryParam}`;

const Schools = {
  getAll: async (): Promise<Array<School>> => {
    try {
      const response = await fetch(apiUrl("*"));
      return (await response.json()).datos;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  },

  getById: async (region: string, signal?: AbortSignal): Promise<Array<School>> => {
    try {
      const response = await fetch(apiUrl(region), { signal });
      return (await response.json()).datos;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  },
};

export default Schools;
