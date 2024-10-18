import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { CarProvider } from "./context/carProvider";
import "./FilterApp.css";

function FilterApp() {
  return (
    <div className="min-h-dvh">
      <CarProvider>
        <Header title="Buscador de autos" />
        <Filters />
        <Table />
      </CarProvider>
    </div>
  );
}

export default FilterApp;
