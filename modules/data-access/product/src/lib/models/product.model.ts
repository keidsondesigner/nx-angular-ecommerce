export type Product = {
  createdAt: string;
  name: string;
  price: string;
  description: string;
  image: string;
  id: string;
};

export type ProductWithoutId = Omit<Product, 'id'>;
