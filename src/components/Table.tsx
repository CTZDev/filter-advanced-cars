import type React from "react";
import { useContext } from "react";
import { CarContext } from "../context/carContext";
import type { CarList } from "../types/CarList";

const updateCars = (carList: Array<CarList>) => {
  const cars = carList.map((car) => {
    const brand = car.brand.toUpperCase();
    const year = car.year;
    const price = car.price;
    const doors = car.doors;
    const transmission = car.transmission.toUpperCase();
    const color = car.color.toUpperCase();
    return [
      brand,
      year,
      doors + " PUERTAS",
      "TRANSMISIÓN: " + transmission,
      "PRECIO: " + price,
      "COLOR: " + color,
    ].join(" - ");
  });
  return cars;
};

export const Table: React.FC = () => {
  const { filteredCars } = useContext(CarContext);
  const listOfCars = updateCars(filteredCars);

  return (
    <>
      <h2 className="font-bold text-pretty text-center text-3xl p-8">RESULTADOS</h2>
      <ul>
        {listOfCars.length === 0 ? (
          <p className="text-center font-semibold text-lg">
            No se encontró el auto con los filtros aplicados 😓😓😓
          </p>
        ) : (
          listOfCars.map((data) => (
            <li key={data} className="text-center text-base p-1.5 font-medium">
              {data}
              <hr />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
