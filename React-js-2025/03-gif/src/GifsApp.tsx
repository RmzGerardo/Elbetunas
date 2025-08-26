import { Buscar } from "./shared/components/Buscar"
import { Header } from "./shared/components/Header"
import { PreviouSearches } from "./gifs/PreviouSearches"
import { GifsList } from "./shared/components/GifsList"
import { mockGifs } from "./mock-data/gifs.mock"


export const GifsApp = () => {
  return (
    <>
   
    <Header title="Buscador de Gifs" description="Descubre y comparte los gifs" />

    <Buscar placeholder="Buscar gifs para compartir" />

    <PreviouSearches  />
   

    <GifsList gifs={mockGifs}/>
  


    </>
  )
}
