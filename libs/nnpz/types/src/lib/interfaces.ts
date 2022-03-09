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
  description?: string;
  image?: string;
  toppings?: IToppingEntity[];
  slug?: string;
  itemsSold: number;
}

export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  role: string;
  accessToken?: string;
}

export interface IOrderEntity extends IBaseEntity {
  total: number;
  complete: boolean;
}

export interface IDashboardEntity {
  title: string;
  count: number;
}

export interface ILoginDto {
  email: string;
  password: string;
}

export interface IRegisterDto {
  email: string;
  password: string;
}
