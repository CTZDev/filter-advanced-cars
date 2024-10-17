import type React from "react";
import filterCar from "../consts/filterCar";
import { Filter } from "./Filter";

export const Filters: React.FC = () => {
  return (
    <>
      <Filter data={filterCar.Marca} />
      <Filter data={filterCar.Anio} />
      <Filter data={filterCar["Precio min"]} />
      <Filter data={filterCar["Precio max"]} />
      <Filter data={filterCar.Puertas} />
      <Filter data={filterCar.Transmisión} />
      <Filter data={filterCar.Color} />
    </>
  );
};
