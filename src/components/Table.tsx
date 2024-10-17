import type React from "react";
import dataCar from "../consts/dataCar";

const convertCar = dataCar.map((car) => {
  const brand = car.brand.toUpperCase().replace(" ", "");
  const year = car.year;
  const price = car.price;
  const doors = car.doors;
  const transmission = car.transmission.toUpperCase();
  const color = car.color.toUpperCase();
  return [brand, year, price, doors, transmission, color].join(" - ");
});

export const Table: React.FC = () => {
  return (
    <>
      <h2 className="font-bold text-pretty text-center text-3xl p-8">
        Resultados
      </h2>
      <ul>
        {convertCar.map((data) => (
          <>
            <li
              key={data}
              className="text-center text-base p-1.5"
            >
              {data}
            </li>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
};
