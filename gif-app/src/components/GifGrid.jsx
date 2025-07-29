import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ categorias }) => {
  // creamos un estado para almacenar las imagenes
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(categorias);
    setImages(newImages);
    console.log(newImages);
    // console.log(categorias);
    // ya me trae los datos de la imagen, ahora quiero el id
    // console.log(newImages.map((img) => img.title));
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4>
        {/* imprimimos el titulo */}
        <ul>
          {images.map((img) => (
            <li key={img.id}>
              <p>{img.title}</p>
              <img src={img.url} alt={img.title} />
            </li>
          ))}
        </ul>
      </h4>
    </>
  );
};
