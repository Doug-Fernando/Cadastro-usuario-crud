type Address = {
  country: string;
  street: string;
  district: string;
  city: string;
  number: string | number;
};

export type ListItemType = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    address: Address;
    age: string | number;
    cpf: string
  }
};
