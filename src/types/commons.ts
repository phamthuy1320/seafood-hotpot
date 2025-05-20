import { ReactNode } from "react";
export type TOption<T = string> = {
  value: T;
  label: string | ReactNode;
};

export type Dish = {
  name: string;
  image: string;
  price?: number;
};

export type Combo = {
  name: string;
  image: string;
  price: number;
  detail: Dish[];
};
