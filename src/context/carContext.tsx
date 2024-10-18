import { createContext } from "react";
import { type CarList } from "../types/CarList";

interface CarContextProps {
  carsFilter: CarList[];
  updateCarsFilter: (key: string) => void;
}

export const CarContext = createContext<CarContextProps>({
  carsFilter: [],
  updateCarsFilter: () => {},
});
