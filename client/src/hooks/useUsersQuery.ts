import { useQuery } from "@tanstack/react-query";
import { UsersResponse } from "../../../types/UserTypes";
import fetchUsers from "../api/fetchUsers";
import { QueryKeys } from "../queries/queryKeys";

export default function useUsersQuery() {
  const { data } = useQuery<UsersResponse>({
    queryKey: [QueryKeys.USERS],
    queryFn: fetchUsers,
  });

  return data?.data;
}
