import { School } from "@/types";
import { apiUrl } from "./api";

const BaseApi = (queryParam: string) =>
  apiUrl(`minerd/centros.php?regional=${queryParam}`);

const Schools = {
  getAll: async (): Promise<Array<School>> => {
    try {
      console.log(BaseApi("*"));
      const response = await fetch(BaseApi("*"));
      return (await response.json()).datos;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  },

  getById: async (
    region: string,
    signal?: AbortSignal
  ): Promise<Array<School>> => {
    try {
      const response = await fetch(BaseApi(region), { signal });
      return (await response.json()).datos;
    } catch (err: any) {
      if (err.message === "Aborted") throw err;
      console.error(err.message);
      throw err;
    }
  },
};

export default Schools;
