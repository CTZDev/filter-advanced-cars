import type React from "react";
import carFilter from "../consts/carFilter";
import { Filter } from "./Filter";

export const Filters: React.FC = () => {
  return (
    <div className="filter-container flex flex-wrap justify-center items-center gap-10 max-w-[1200px] m-auto">
      <Filter title={carFilter.brand.title} data={carFilter.brand.data} filterKey="brand" />
      <Filter title={carFilter.year.title} data={carFilter.year.data} filterKey="year" />
      <Filter
        title={carFilter.minPrice.title}
        data={carFilter.minPrice.data}
        filterKey="minPrice"
      />
      <Filter
        title={carFilter.maxPrice.title}
        data={carFilter.maxPrice.data}
        filterKey="maxPrice"
      />
      <Filter title={carFilter.doors.title} data={carFilter.doors.data} filterKey="doors" />
      <Filter
        title={carFilter.transmission.title}
        data={carFilter.transmission.data}
        filterKey="transmission"
      />
      <Filter title={carFilter.color.title} data={carFilter.color.data} filterKey="color" />
    </div>
  );
};
