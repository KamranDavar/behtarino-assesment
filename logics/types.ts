export type id = string | number;
export type product = {
  id: id;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type products = product[];