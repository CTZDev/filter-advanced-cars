import Filter from "./components/Filter";
import optionsFilter from "./consts/filters";
import "./FilterApp.css";

function FilterApp() {
  return (
    <div className="min-h-dvh">
      <h1 className="text-center font-semibold text-4xl p-8">
        Buscador de Autos
      </h1>

      <Filter data={optionsFilter[0].Marca?.options} />
    </div>
  );
}

export default FilterApp;
