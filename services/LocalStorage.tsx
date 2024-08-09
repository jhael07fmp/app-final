import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorage {
  private static userKey = "user";
  static user: User;

  constructor() {
    LocalStorage.user = new User();
  }

  public static async getUser() {
    return await this.get(this.userKey);
  }

  public static async removeUser() {
    return await this.remove(this.userKey);
  }

  public static async setUser(item: unknown) {
    LocalStorage.user.set(item);
    return await this.set(this.userKey, item);
  }

  private static async set(name: string, item: unknown) {
    try {
      return await AsyncStorage.setItem(name, JSON.stringify(item));
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  }

  private static async get(name: string) {
    try {
      return await AsyncStorage.getItem(name);
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  }

  private static async remove(name: string) {
    try {
      return await AsyncStorage.removeItem(name);
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  }
}

class User {
  set(item: unknown) {}
}

export default LocalStorage;
