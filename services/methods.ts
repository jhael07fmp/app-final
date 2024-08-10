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
}
