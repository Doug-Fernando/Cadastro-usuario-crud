type Address = {
  state: string;
  street: string;
  district: string;
  city: string;
};

export type ListItemType = {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  age: string | number;
  cpf: string
};

export type ListItemTypeProps = {
  user: ListItemType
};
