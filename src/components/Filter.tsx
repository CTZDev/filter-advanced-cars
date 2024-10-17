import { Select } from "antd";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value} `);
};

interface FilterProps {
  data: Array<{ value: string; label: string }>;
}

export const Filter: React.FC<FilterProps> = ({ data }) => (
  <Select
    defaultValue="Seleccione"
    style={{ width: 120 }}
    onChange={handleChange}
    options={data}
  />
);
