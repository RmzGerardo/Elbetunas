export const pokeApi = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    const response = await fetch(url);
    const { results } = await response.json();
    // console.log(result);

    const pokemonDetalles = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          images:
            pokemonData.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          types: pokemonData.types.map((type) => type.type.name),
          height: pokemonData.height,
          weight: pokemonData.weight,
          stats: pokemonData.stats.map((stat) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          })),
          abilities: pokemonData.abilities.map(
            (ability) => ability.ability.name
          ),
          moves: pokemonData.moves.map((move) => move.move.name),
          base_experience: pokemonData.base_experience,
          species: pokemonData.species.name,
          location_area_encounters: pokemonData.location_area_encounters,
          game_indices: pokemonData.game_indices.map((index) => ({
            game_index: index.game_index,
            version: index.version.name,
          })),
        };
      })
    );
    console.log(pokemonDetalles);
    return pokemonDetalles;
  } catch (error) {
    console.log(error);
  }

  // const url = "https://rickandmortyapi.com/api/character";
  // const respon = await fetch(url);
  // const { results } = await respon.json();
  // console.log(results);

  // const gifs = results.map((name) => ({
  //   id: name.id,
  //   name: name.name,
  //   image: name.image,
  // }));
  // console.log(gifs);
  // return gifs;
};

pokeApi();
