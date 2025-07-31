export const pokeApi = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const respon = await fetch(url);
  const { results } = await respon.json();
  console.log(results);

  const gifs = results.map((name) => ({
    id: name.id,
    name: name.name,
    image: name.image,
  }));
  console.log(gifs);
  return gifs;
};

pokeApi();
