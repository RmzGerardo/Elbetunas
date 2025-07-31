export const getGifs = async (categorias) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=aCU0J6bUzfnv6fVdir70I7f7BmVQCPT8&q=${categorias}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};


