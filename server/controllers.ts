import DatabaseSingleton from "../cli/Database/DatabaseSingleton";
import { UsersResponse } from "../types/UserTypes";

const db = DatabaseSingleton.getInstance();

export const controllers = {
  getUsers(): UsersResponse {
    return {
      data: db.users,
    };
  },
};

export default controllers;
