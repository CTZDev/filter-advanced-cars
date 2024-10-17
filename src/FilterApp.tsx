import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import "./FilterApp.css";

function FilterApp() {
  return (
    <div className="min-h-dvh">
      <Header title="Buscador de autos" />
      <Filters />
      <Table />
    </div>
  );
}

export default FilterApp;
