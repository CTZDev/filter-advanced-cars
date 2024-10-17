type OptionCar = {
  value: string;
  label: string;
};

export type Car = {
  Marca: Array<OptionCar>;
  Anio: Array<OptionCar>;
  "Precio min": Array<OptionCar>;
  "Precio max": Array<OptionCar>;
  Puertas: Array<OptionCar>;
  Transmisión: Array<OptionCar>;
  Color: Array<OptionCar>;
};
