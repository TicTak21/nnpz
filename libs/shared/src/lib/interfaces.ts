import { EPizzaSize } from './enums';

export interface IToppingEntity {
  id: string;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPizzaEntity {
  id: string;
  name: string;
  size: EPizzaSize;
  price: number;
  createdAt: string;
  updatedAt: string;
  toppings: IToppingEntity[];
}
