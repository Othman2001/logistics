export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: RoleEnumType;
};

export enum RoleEnumType {
  biker = 'biker',
  shipper = 'shipper',
}
