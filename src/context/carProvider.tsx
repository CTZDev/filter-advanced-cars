import React, { ReactNode, useState } from "react";
import carList from "../consts/carList";
import type { PartialCarFilter } from "../types/CarFilter";
import type { CarList } from "../types/CarList";
import { CarContext } from "./carContext";

interface CarProviderProps {
  children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [filteredCars, setFilteredCars] = useState(carList);
  const [currentFilters, setCurrentFilters] = useState<Partial<CarList>>({});

  const filterCars = (filters: Partial<CarList> & PartialCarFilter) => {
    // Guardamos el estado de los filtros actuales
    const newFilters = { ...currentFilters, ...filters };

    const filtered = carList.filter((car) => {
      // Filter for brand
      if (newFilters.brand && newFilters.brand.toLowerCase() !== "seleccione") {
        if (!car.brand.toLowerCase().startsWith(newFilters.brand.toLowerCase())) {
          return false;
        }
      }

      // Filter for year
      if (newFilters.year && newFilters.year !== "Seleccione") {
        if (car.year !== newFilters.year) {
          return false;
        }
      }

      // Filter for price
      const carPrice = Number(car.price);
      const minPrice =
        newFilters.minPrice && newFilters.minPrice !== "Seleccione"
          ? parseInt(newFilters.minPrice, 10)
          : null;
      const maxPrice =
        newFilters.maxPrice && newFilters.maxPrice !== "Seleccione"
          ? parseInt(newFilters.maxPrice, 10)
          : null;

      if (minPrice && maxPrice) {
        if (isNaN(carPrice) || carPrice < minPrice || carPrice > maxPrice) {
          return false;
        }
      } else if (minPrice && carPrice < minPrice) return false;
      else if (maxPrice && carPrice > maxPrice) return false;

      // Filter for doors
      if (newFilters.doors && newFilters.doors !== "Seleccione") {
        if (car.doors.toString() !== newFilters.doors) {
          return false;
        }
      }

      // Filter for transmission
      if (newFilters.transmission && newFilters.transmission.toLowerCase() !== "seleccione") {
        if (!car.transmission.toLowerCase().startsWith(newFilters.transmission.toLowerCase())) {
          return false;
        }
      }

      // Filter for color
      if (newFilters.color && newFilters.color.toLowerCase() !== "seleccione") {
        if (car.color.toLowerCase() !== newFilters.color.toLowerCase()) {
          return false;
        }
      }

      return true;
    });

    setCurrentFilters(newFilters);
    setFilteredCars(filtered);
  };

  return <CarContext.Provider value={{ filteredCars, filterCars }}>{children}</CarContext.Provider>;
};
