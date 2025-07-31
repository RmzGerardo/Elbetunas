import { useState, useEffect } from "react";
import { pokeApi } from "../assets/js/index.js";

export const GifsApp = () => {
  const [allGifs, setAllGifs] = useState([]);
  const [gif, setGif] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    // Cargar todos los personajes al inicio
    pokeApi().then((data) => {
      setAllGifs(data);
      setGif(data);
    });
  }, []);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    const filtrados = allGifs.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setGif(filtrados);
  };
  return (
    <>
      <div className="container">
        <div className="row container justify-content-center">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <input
              type="text"
              className="form-control input-size mx-auto mt-5"
              style={{ width: "500px" }}
              value={inputValue}
              onChange={onInputChange}
            />
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={onSearch}
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <ul>
            {gif.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width={50}
                  style={{ marginRight: 10 }}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
