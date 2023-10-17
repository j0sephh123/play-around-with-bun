import users from "../users";
import DBOperations from "./DBOperations";
import { User } from "../../types/UserTypes";

export default class DB {
  private dbOps: DBOperations;

  constructor() {
    this.dbOps = new DBOperations();
    this.init();
  }

  private init() {
    this.dbOps.createUsersTable();
    this.dbOps.insertUsers(users);
    this.dbOps.verifyInsert(users);
  }

  get users() {
    return this.dbOps.selectAllUsers() as User[];
  }
}
