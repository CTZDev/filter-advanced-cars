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

    if (
      newFilters.minPrice &&
      newFilters.minPrice !== "Seleccione" &&
      newFilters.maxPrice &&
      newFilters.maxPrice !== "Seleccione"
    ) {
      const minPrice = newFilters.minPrice;
      const maxPrice = newFilters.maxPrice;

      filtered = filtered.filter((car) => {
        const carPrice = Number(car.price);
        const minPriceNumber = parseInt(minPrice, 10);
        const maxPriceNumber = parseInt(maxPrice, 10);
        return !isNaN(carPrice) && carPrice >= minPriceNumber && carPrice <= maxPriceNumber;
      });
    }

    if (newFilters.minPrice && (!newFilters.maxPrice || newFilters.maxPrice === "Seleccione")) {
      const minPrice = newFilters.minPrice;
      if (minPrice === "Seleccione") {
        delete newFilters.minPrice;
        delete newFilters.maxPrice;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => {
          const carPrice = Number(car.price);
          const minPriceNumber = parseInt(minPrice, 10);
          return !isNaN(carPrice) && carPrice >= minPriceNumber;
        });
      }
    }

    if (newFilters.maxPrice && (!newFilters.minPrice || newFilters.minPrice === "Seleccione")) {
      const maxPrice = newFilters.maxPrice;
      if (maxPrice === "Seleccione") {
        delete newFilters.minPrice;
        delete newFilters.maxPrice;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => {
          const carPrice = Number(car.price);
          const maxPriceNumber = parseInt(maxPrice, 10);
          return !isNaN(carPrice) && carPrice <= maxPriceNumber;
        });
      }
    }

    if (newFilters.doors) {
      const doors = newFilters.doors;
      if (doors === "Seleccione") {
        delete newFilters.doors;
        setFilteredCars(filtered);
      } else {
        filtered = filtered.filter((car) => car.doors.toString() === doors);
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
