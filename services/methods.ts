export namespace Methods {
  export const get = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  };

  export const post = async (url: string, body: Record<string, any>) => {
    try {
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  };
}
