import { mockGifs } from "./mock-data/gifs.mock"
import { Buscar } from "./shared/components/Buscar"
import { Header } from "./shared/components/Header"
import { PreviouSearches } from "./gifs/PreviouSearches"


export const GifsApp = () => {
  return (
    <>
   
    <Header title="Buscador de Gifs" description="Descubre y comparte los gifs" />

    <Buscar placeholder="Buscar gifs para compartir" />

    <PreviouSearches  />
   

  
    <div className="gifs-container">
       {
  mockGifs.map(gif => (
    <div key={gif.id} className="gif-item">
      <img src={gif.url} alt={gif.title} />
      <h3>{gif.title}</h3>
      <p>
        {gif.width}x{gif.height}(1.5mb)
      </p>
    </div>
  ))
}
        
    </div>

    </>
  )
}
