import { USERS_ENDPOINT } from "../../../config";
import { UsersResponse } from "../../../types/UserTypes";
import fetchService from "../services/fetchService";

export default async function fetchUsers(): Promise<UsersResponse> {
  return fetchService<UsersResponse>(USERS_ENDPOINT);
}
