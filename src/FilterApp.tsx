import Particles from "particlesjs";
import { useEffect } from "react";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { CarProvider } from "./context/carProvider";
import "./FilterApp.css";

const FilterApp: React.FC = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      maxParticles: 1200,
      color: "#0099ff",
      speed: 0.4,
      sizeVariations: 5,
    });
  }, []);

  return (
    <>
      <canvas className="background"></canvas>
      <div className="min-h-dvh" id="bg-wave">
        <CarProvider>
          <Header title="Buscador de autos" />
          <Filters />
          <Table />
        </CarProvider>
      </div>
    </>
  );
};

export default FilterApp;
