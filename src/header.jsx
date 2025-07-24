import { useState } from "react";
import { BsCloudMoonFill, BsSunFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import spider from "./img/spider.jpg"; // Asegúrate de que la ruta sea correcta

export const Header = () => {
  const [color, setColor] = useState(false);

  const colorChange = () => {
    setColor(!color);
    if (!color) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <div className="position-relative mt-4">
        <ul className="nav justify-content-center nav-underline">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Historia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Experiencia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-disabled="true">
              Contactos
            </a>
          </li>
        </ul>
        <button
          className={`btn btn-sm position-absolute top-0 end-0 me-3 ${
            color ? "btn-warning" : "btn-dark"
          }`}
          onClick={colorChange}
        >
          {color ? "Modo claro" : "Modo oscuro"}{" "}
          {color ? <BsSunFill /> : <BsCloudMoonFill />}
        </button>
      </div>

      <div
        className="row align-items-center justify-content-center mt-4"
        style={{ minHeight: "300px" }}
      >
        <div className="col-auto d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center titulo-animado">
            <Typewriter
              words={["Elbetunas", "Bienvenido", "Portafolio React"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="col-auto d-flex justify-content-center align-items-center">
          <img src={spider} className="img-circle" alt="Spider" />
        </div>
      </div> 
    </>
  );
};
