import React, { ReactNode, useState } from "react";
import carList from "../consts/carList";
import type { CarList } from "../types/CarList";
import { CarContext } from "./carContext";

interface CarProviderProps {
  children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [filteredCars, setFilteredCars] = useState(carList);
  const [currentFilters, setCurrentFilters] = useState<Partial<CarList>>({});

  const filterCars = (filters: Partial<CarList>) => {
    // Guardamos el estado de los filtros actuales
    const newFilters = { ...currentFilters, ...filters };
    let filtered = [...carList];

    if (newFilters.brand) {
      const brand = newFilters.brand.toLowerCase();
      if (brand === "seleccione") {
        delete newFilters.brand;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => car.brand.toLowerCase().startsWith(brand));
      }
    }

    if (newFilters.year) {
      const year = newFilters.year;
      if (year === "Seleccione") {
        delete newFilters.year;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => car.year === year);
      }
    }

    if (newFilters.price) {
      const price = newFilters.price;
      if (price === "Seleccione") {
        delete newFilters.price;
        setFilteredCars(filtered);
      } else {
        // !TODO => Aqui debo comprobar el tema del max y min price.
        console.log("");
      }
    }

    if (newFilters.doors) {
      const doors = newFilters.doors;
      if (doors === "Seleccione") {
        delete newFilters.doors;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => car.doors === doors);
      }
    }

    if (newFilters.transmission) {
      const transmission = newFilters.transmission.toLowerCase();
      if (transmission === "seleccione") {
        delete newFilters.transmission;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) =>
          car.transmission.toLowerCase().startsWith(transmission)
        );
      }
    }

    if (newFilters.color) {
      const color = newFilters.color.toLowerCase();
      if (color === "seleccione") {
        delete newFilters.color;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => car.color === color);
      }
    }

    setCurrentFilters(newFilters);
    setFilteredCars(filtered);
  };

  return <CarContext.Provider value={{ filteredCars, filterCars }}>{children}</CarContext.Provider>;
};
