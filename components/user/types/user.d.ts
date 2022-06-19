export interface RoleType {
  name: string;
  id: string;
}

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  role?: RoleType[];
}
