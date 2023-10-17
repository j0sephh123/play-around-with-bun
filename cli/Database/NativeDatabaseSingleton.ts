import { Database } from "bun:sqlite";

export default class NativeDatabaseSingleton {
  private static instance: Database;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): Database {
    if (!NativeDatabaseSingleton.instance) {
      NativeDatabaseSingleton.instance = new Database();
    }

    return NativeDatabaseSingleton.instance;
  }
}
