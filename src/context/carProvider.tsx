import React, { ReactNode, useState } from "react";
import carList from "../consts/carList";
import type { CarList } from "../types/CarList";
import { CarContext } from "./carContext";

interface CarProviderProps {
  children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [carsFilter, setCarsFilter] = useState<CarList[]>(carList);

  // !TODO: ACTUALIZAR FUNCION
  const updateCarsFilter = (key: string) => {
    const filterCarsForKey = carsFilter.filter((car) => {
      return car;
    });
    console.log(updateCarsFilter, key);
    setCarsFilter(filterCarsForKey);
  };

  return (
    <CarContext.Provider value={{ carsFilter, updateCarsFilter }}>{children}</CarContext.Provider>
  );
};
