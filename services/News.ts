import { type News } from "@/types";

const baseApi = `${process.env.EXPO_PUBLIC_API_URL}def/noticias.php`;

export namespace NewsUtils {
  export const getNews = async (signal?: AbortSignal): Promise<Array<News>> => {
    try {
      const response = await fetch(baseApi, { signal });
      return response.json() as unknown as Array<News>;
    } catch (err: any) {
      if (err.message === "Aborted") throw err;
      console.error(err.message);
      throw err;
    }
  };
}
