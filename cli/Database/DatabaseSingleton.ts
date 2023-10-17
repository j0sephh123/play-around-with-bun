import DB from "./DB";

export default class DatabaseSingleton {
  private static instance: DB;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): DB {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DB();
    }

    return DatabaseSingleton.instance;
  }
}
