import { EPizzaSize } from './enums';

export interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IToppingEntity extends IBaseEntity {
  name: string;
  price: number;
}

export interface IPizzaEntity extends IBaseEntity {
  name: string;
  size: EPizzaSize;
  price: number;
  description: string;
  image: string;
  toppings: IToppingEntity[];
}

export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  role: string;
}
