import { Select } from "antd";
import React, { useContext } from "react";
import { CarContext } from "../context/carContext";
import type { CarList } from "../types/CarList";
import type { OptionSelect } from "../types/Select";

interface FilterProps {
  title: string;
  data: Array<OptionSelect>;
  filterKey: keyof CarList;
}

export const Filter: React.FC<FilterProps> = ({ title, data, filterKey }) => {
  const { filterCars } = useContext(CarContext);

  const handleChange = (value: string) => {
    const filter = { [filterKey]: value };
    console.log(filter);
    filterCars(filter);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-center font-normal text-base">{title}</h3>
      <Select
        defaultValue="Seleccione"
        style={{ width: 200, fontFamily: "Poppins" }}
        dropdownStyle={{ fontFamily: "Poppins" }}
        onChange={handleChange}
        options={data}
      />
    </div>
  );
};
