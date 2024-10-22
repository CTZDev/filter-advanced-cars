import { OptionSelect } from "./Select";

type CarOption = {
  data: Array<OptionSelect>;
  title: string;
};

export type CarFilter = {
  brand: CarOption;
  year: CarOption;
  minPrice: CarOption;
  maxPrice: CarOption;
  doors: CarOption;
  transmission: CarOption;
  color: CarOption;
};

export type PartialCarFilter = {
  minPrice?: string;
  maxPrice?: string;
};
