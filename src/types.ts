export type DrinkType = "beer" | "cider" | "premix" | "spirits" | "redwine" | "whitewine";

export type PackType = "bottle" | "pack" | "case" | "promobottle" | "promopack" | "promocase";

export type Drink = {
  name: string;
  stockcode: string;
  standardDrinks: number;
  units: {
    [key in "case" | "pack"]: number;
  };
  prices: {
    [key in PackType]: number;
  };
  price: number;
  ratio: number;
  percentage: string;
};

export type SortByOption = "ratio" | "price" | "standardDrinks";

export type Ordering = "asc" | "desc";

export type FilterOptions = {
  type: DrinkType;
  pack: PackType;
  includePromo: boolean;
  search: string;
  sortBy: SortByOption;
  order: Ordering;
};
