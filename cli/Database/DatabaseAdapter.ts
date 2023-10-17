import NativeDatabaseSingleton from "./NativeDatabaseSingleton";
import { SqlQueries } from "./sqlQueries";

export default class DatabaseAdapter {
  static run(query: SqlQueries) {
    NativeDatabaseSingleton.getInstance().run(query);
  }

  static prepare(query: SqlQueries) {
    return NativeDatabaseSingleton.getInstance().prepare(query);
  }

  static query(query: SqlQueries) {
    return NativeDatabaseSingleton.getInstance().query(query).get();
  }

  static queryAll(query: SqlQueries) {
    return NativeDatabaseSingleton.getInstance().query(query).all();
  }

  static transaction(callback: (...args: any[]) => any) {
    return NativeDatabaseSingleton.getInstance().transaction(callback);
  }
}
