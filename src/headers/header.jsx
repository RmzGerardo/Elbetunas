import { useState } from "react";
import { BsCloudMoonFill, BsSunFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import spider from "../img/spider.jpg";

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
      <header>
        <nav className="navbar py-3" style={{ background: "#0a1a26" }}>
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Izquierda: Avatar y nombre */}
            <div className="d-flex align-items-center">
              <img
                src={spider}
                alt="Avatar"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #fff",
                  marginRight: "16px",
                }}
              />
              <span
                style={{ color: "#fff", fontSize: "1.3rem", fontWeight: "500" }}
              >
                Elbetunas
              </span>
            </div>

            {/* Centro: Menú */}
            <ul className="nav justify-content-center gap-4 nav-text">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/elbetunas/"
                >
                  Inic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Blog
                </a>
              </li>
            </ul>

            {/* Derecha: Iconos y botón modo oscuro */}
            <div className="d-flex align-items-center gap-3">
              <a
                href="https://www.linkedin.com/in/elbetunas/"
                target="_blank"
                style={{ color: "#00ffe7" }}
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/RmzGerardo"
                target="_blank"
                className="text-light"
              >
                <FaGithub size={22} />
              </a>
              <button
                className={`btn btn-sm ${
                  color ? "btn-warning" : "btn-dark"
                } ms-2`}
                onClick={colorChange}
                style={{ borderRadius: "50%" }}
              >
                {color ? <BsSunFill /> : <BsCloudMoonFill />}
              </button>
            </div>
          </div>
        </nav>

        <div className="row align-items-center justify-content-center m-4">
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
        </div>
      </header>
    </>
  );
};
