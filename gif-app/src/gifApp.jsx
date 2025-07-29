import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categorias, setcategorias] = useState(["programing"]);

  const agregarCategoria = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    console.log(newCategory);

    setcategorias([...categorias, newCategory]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={(event) => agregarCategoria(event)} />
      {categorias.map((categorias) => (
        <GifGrid key={categorias} categorias={categorias} />
      ))}
    </>
  );
};
