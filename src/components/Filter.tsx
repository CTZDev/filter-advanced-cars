import { Select } from "antd";
import React from "react";
import type { OptionSelect } from "../types/Select";

interface FilterProps {
  title: string;
  data: Array<OptionSelect>;
}

export const Filter: React.FC<FilterProps> = ({ title, data }) => {
  //!TODO: ACTUALIZAR CHANGE CON VALORES.
  const handleChange = (value: string) => {
    console.log(`Selected: ${value} `);
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
