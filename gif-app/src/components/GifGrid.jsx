// import { useEffect, useState } from "react";
import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categorias }) => {
  const { images, isLoading } = useFetchGifs(categorias);
  console.log(isLoading);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      {/* imprimimos el titulo */}
      <div className="card-grid">
        {images.map((img) => (
          <Gifitem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
