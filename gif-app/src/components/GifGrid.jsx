export const GifGrid = ({categorias}) => {


    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=6R4kMo0KDqGyanLEv6KfYsfMydZPp7DE&q=${categorias}`;
        const resp = await fetch( url );
        const { data } = await resp.json();
    }

  return (
    <>
      <h3>{categorias}</h3>
    
    </>
  )
}

GifGrid();




