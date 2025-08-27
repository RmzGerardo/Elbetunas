import { Buscar } from "./shared/components/Buscar"
import { Header } from "./shared/components/Header"
import { PreviouSearches } from "./gifs/PreviouSearches"
import { GifsList } from "./shared/components/GifsList"
import { mockGifs } from "./mock-data/gifs.mock"
import { useState } from "react"





export const GifsApp = () => {

  const [previousTerms, setpreviousTerms] = useState(['goku', 'dragon ball']);

  const handleTerm = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string) => {
    console.log("buscando:", query);
  };

  return (
    <>
   
    <Header title="Buscador de Gifs" description="Descubre y comparte los gifs"/>

   <Buscar placeholder="Buscar gifs para compartir"
  onQuery={handleSearch}
/>

    <PreviouSearches searches={previousTerms} onlabelClick={handleTerm} />
   

    <GifsList gifs={mockGifs}/>

    </>
  )
}
