import { useState, useEffect, use } from "react";
import { pokeApi } from "../assets/js";

export const Header = () => {
  //
  /**
   * Estado que almacena la lista de pokémons obtenidos.
   */
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokeApi().then((data) => setPokemons(data));
  }, []);

  return (
    <>
      <nav className="nav-color">
        <ul className="nav justify-content-center m-2">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="/pokemons" className="nav-link">
              Pokemons
            </a>
          </li> */}
        </ul>
      </nav>

      <div className="cards mx-auto mt-5 p-3">
        {pokemons.map((poke) => (
          <div className="card text-center" key={poke.id}>
            <p>{poke.name}</p>
            <img
              className="mx-auto d-block"
              src={poke.images}
              alt={poke.name}
            />
            <p>Tamaño: {poke.height}ps</p>
            <p>Peso: {poke.weight}kl</p>
            {poke.stats.map((stat) => (
              <li key={stat.name}>
                {stat.name}: {stat.base_stat}
              </li>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="container">
        <h1 className="title_poke">Ejercicio de React js</h1>
        <div className="card-poke justify-content-center align-items-center mt-5 ">
          {pokemons.map((poke) => (
            <div className="card text-center" key={poke.id}>
              <p>{poke.name}</p>
              <img
                className="mx-auto d-block "
                src={poke.images}
                alt={poke.name}
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};
