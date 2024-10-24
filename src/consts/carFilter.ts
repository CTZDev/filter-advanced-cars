import type { CarFilter } from "../types/CarFilter";

const carFilter: CarFilter = {
  brand: {
    title: "Marca",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "Mercedez Bens", label: "Mercedez Bens" },
      { value: "Chevrolet", label: "Chevrolet" },
      { value: "Ford", label: "Ford" },
      { value: "Dodge", label: "Dodge" },
    ],
  },
  year: {
    title: "Año",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "2020", label: "2020" },
      { value: "2019", label: "2019" },
      { value: "2018", label: "2018" },
      { value: "2017", label: "2017" },
      { value: "2016", label: "2016" },
      { value: "2015", label: "2015" },
      { value: "2014", label: "2014" },
      { value: "2013", label: "2013" },
      { value: "2012", label: "2012" },
      { value: "2011", label: "2011" },
      { value: "2010", label: "2010" },
    ],
  },
  minPrice: {
    title: "Precio mínimo",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "20000", label: "20000" },
      { value: "30000", label: "30000" },
      { value: "40000", label: "40000" },
      { value: "50000", label: "50000" },
      { value: "60000", label: "60000" },
      { value: "70000", label: "70000" },
      { value: "80000", label: "80000" },
      { value: "90000", label: "90000" },
    ],
  },
  maxPrice: {
    title: "Precio máximo",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "20000", label: "20000" },
      { value: "30000", label: "30000" },
      { value: "40000", label: "40000" },
      { value: "50000", label: "50000" },
      { value: "60000", label: "60000" },
      { value: "70000", label: "70000" },
      { value: "80000", label: "80000" },
      { value: "90000", label: "90000" },
    ],
  },
  doors: {
    title: "Puertas",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "2", label: "2" },
      { value: "4", label: "4" },
    ],
  },
  transmission: {
    title: "Transmisión",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "Manual", label: "Manual" },
      { value: "Automatico", label: "Automático" },
    ],
  },
  color: {
    title: "Color",
    data: [
      { value: "Seleccione", label: "Seleccione" },
      { value: "Blanco", label: "Blanco" },
      { value: "Negro", label: "Negro" },
      { value: "Rojo", label: "Rojo" },
      { value: "Azul", label: "Azul" },
      { value: "Verde", label: "Verde" },
      { value: "Morado", label: "Morado" },
      { value: "Amarillo", label: "Amarillo" },
      { value: "Violeta", label: "Violeta" },
      { value: "Gris", label: "Gris" },
    ],
  },
};

export default carFilter;
