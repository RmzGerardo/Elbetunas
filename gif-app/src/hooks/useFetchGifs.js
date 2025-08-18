import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorias) => {
  //   creamos un estado para almacenar las imagenes
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(categorias);
    setImages(newImages);
    setIsLoading(false);
    console.log(newImages);
    // console.log(categorias);
    // ya me trae los datos de la imagen, ahora quiero el id
    // console.log(newImages.map((img) => img.title));
  };

  useEffect(() => {
    getImages();
  }, [categorias]);

  return {
    images,
    isLoading
  };
};
