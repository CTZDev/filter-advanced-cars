import { Select } from "antd";
import React, { useContext } from "react";
import { CarContext } from "../context/carContext";
import type { CarFilter } from "../types/CarFilter";
import type { OptionSelect } from "../types/Select";

interface FilterProps {
  title: string;
  data: Array<OptionSelect>;
  filterKey: keyof CarFilter;
}

export const Filter: React.FC<FilterProps> = ({ title, data, filterKey }) => {
  const { filterCars } = useContext(CarContext);

  const handleChange = (value: string | number) => {
    const filter = { [filterKey]: value };
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
