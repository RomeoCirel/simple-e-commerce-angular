import {Model} from "../commons/types/models.types";


export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  ranking: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface ProductModel extends Product, Model {};

export type ProductsList = ProductModel[];

export const INITIAL_PRODUCT: Product = {
  name: '',
  price: 0,
  description: '',
  image: '',
  ranking: 0
};

export const PRODUCT_LIST: ProductsList = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    image: 'https://via.placeholder.com/150',
    ranking: 1
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'Description of product 2',
    image: 'https://via.placeholder.com/150',
    ranking: 2
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    description: 'Description of product 3',
    image: 'https://via.placeholder.com/150',
    ranking: 5
  }
];



