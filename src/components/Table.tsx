import type React from "react";
import { useContext } from "react";
import { CarContext } from "../context/carContext";

export const Table: React.FC = () => {
  const { filteredCars: listOfCars } = useContext(CarContext);

  return (
    <>
      <h2
        className="font-bold text-pretty text-center text-6xl py-12 pt-32 text-[#0099ff]"
        style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.7)" }}
      >
        RESULTADOS
      </h2>
      <div className="overflow-x-auto">
        <table id="table" className="m-auto border-2 border-collapse min-w-[1120px] mb-28 bg-white">
          <thead>
            <tr className="border-2 border-collapse bg-[#0099ff] text-white font-bold text-lg">
              <th className="border-2 border-collapse px-12 py-2.5">MARCA</th>
              <th className="border-2 border-collapse px-12 py-2.5">AÑO</th>
              <th className="border-2 border-collapse px-12 py-2.5">PRECIO (S/.)</th>
              <th className="border-2 border-collapse px-12 py-2.5">PUERTAS</th>
              <th className="border-2 border-collapse px-12 py-2.5">TRANSMISIÓN</th>
              <th className="border-2 border-collapse px-12 py-2.5">COLOR</th>
            </tr>
          </thead>
          <tbody>
            {listOfCars.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center font-medium py-1.5">
                  {" "}
                  No se encontró el auto con los filtros aplicados 😓😓😓
                </td>
              </tr>
            ) : (
              listOfCars.map((data) => (
                <tr key={data.id} className="text-center text-base p-1.5 font-light">
                  <td className="border border-collapse px-12 py-1.5">{data.brand}</td>
                  <td className="border border-collapse px-12 py-1.5">{data.year}</td>
                  <td className="border border-collapse px-12 py-1.5">{data.price}</td>
                  <td className="border border-collapse px-12 py-1.5">{data.doors}</td>
                  <td className="border border-collapse px-12 py-1.5">{data.transmission}</td>
                  <td className="border border-collapse px-12 py-1.5">{data.color}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
