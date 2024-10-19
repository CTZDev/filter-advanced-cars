import { createContext } from "react";
import { type CarList } from "../types/CarList";

interface CarContextProps {
  filteredCars: CarList[];
  filterCars: (filters: Partial<CarList>) => void;
}

export const CarContext = createContext<CarContextProps>({
  filteredCars: [],
  filterCars: () => {},
});
