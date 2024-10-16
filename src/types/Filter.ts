type Option = {
  value: string;
  label: string;
};

type FilterOption = {
  options: Option[];
};

export type Filters = {
  Marca?: FilterOption;
  Año?: FilterOption;
  "Precio min"?: FilterOption;
  "Precio max"?: FilterOption;
  Puertas?: FilterOption;
  Transmisión?: FilterOption;
  Color?: FilterOption;
};
