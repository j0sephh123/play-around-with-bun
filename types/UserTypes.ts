export type User = {
  id: number;
  name: string;
  isActive: 0 | 1;
  age: number;
};
export type UsersResponse = {
  data: User[];
};
