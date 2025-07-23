import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({categorias}) => {

  getGifs(categorias);
  return (
    <>
    <h3>{categorias}</h3>
    </>
  )
}







