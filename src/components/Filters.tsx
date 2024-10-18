import type React from "react";
import carFilter from "../consts/carFilter";
import { Filter } from "./Filter";

export const Filters: React.FC = () => {
  return (
    <div className="filter-container flex flex-wrap justify-center items-center gap-10 max-w-[1200px] m-auto">
      <Filter title={carFilter.brand.title} data={carFilter.brand.data} />
      <Filter title={carFilter.year.title} data={carFilter.year.data} />
      <Filter title={carFilter.minPrice.title} data={carFilter.minPrice.data} />
      <Filter title={carFilter.maxPrice.title} data={carFilter.maxPrice.data} />
      <Filter title={carFilter.doors.title} data={carFilter.doors.data} />
      <Filter title={carFilter.transmission.title} data={carFilter.transmission.data} />
      <Filter title={carFilter.color.title} data={carFilter.color.data} />
    </div>
  );
};
