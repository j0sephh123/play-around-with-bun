import errors from "../errors";
import DatabaseAdapter from "./DatabaseAdapter";
import sqlQueries, { SqlQueries } from "./sqlQueries";

export default class DBOperations {
  constructor() {}

  public createUsersTable() {
    DatabaseAdapter.run(sqlQueries.createUsersTable as SqlQueries);

    const tableCheck = DatabaseAdapter.query(
      sqlQueries.doesUsersTableExist as SqlQueries
    );
    if (!tableCheck) {
      throw new Error(errors.failedToCreateUsersTable);
    }
    console.log("Table 'users' has been successfully created");
  }

  public insertUsers(users: any) {
    const insert = DatabaseAdapter.prepare(
      sqlQueries.insertIntoUsers as SqlQueries
    );
    const insertMany = DatabaseAdapter.transaction((users: any) => {
      for (const user of users) insert.run(user);
      return users.length;
    });
    const count = insertMany(users);
    console.log(`Inserted ${count} users`);
  }

  public verifyInsert(users: any) {
    const insertedRecordsResult = DatabaseAdapter.query(
      sqlQueries.countUserRecords as SqlQueries
    ) as { count: number };

    if (users.length !== insertedRecordsResult.count) {
      throw new Error(errors.failedToInsertExpectedRecords);
    }
    console.log("All records inserted correctly");
  }

  public selectAllUsers() {
    return DatabaseAdapter.queryAll(sqlQueries.selectAllUsers as SqlQueries);
  }
}
