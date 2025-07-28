import { useState } from "react";
import { BsCloudMoonFill, BsSunFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import spider from "../img/spider.jpg";

import { Link } from "react-router-dom";

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
            <div className="d-flex align-items-center icono_movil">
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
              <span style={{ fontSize: "1.3rem", fontWeight: "500" }}>
                Elbetunas
              </span>
            </div>

            {/* Centro: Menú */}
            <ul className="nav justify-content-center gap-4 nav-text mt-3 ">
              <li className="nav-item">
                <Link
                  className="nav-link nav-text-movil"
                  href="https://www.linkedin.com/in/elbetunas/"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item nav-text-movil">
                <Link className="nav-link text-light" to="/portafolio">
                  Portafolio
                </Link>
              </li>
              <li className="nav-item nav-text-movil">
                <a className="nav-link text-light" href="#">
                  Experiencia
                </a>
              </li>
            </ul>

            {/* Derecha: Iconos y botón modo oscuro */}
            <div className="d-flex align-items-center gap-3 mt-3 iconos_nav">
              <a
                href="https://www.linkedin.com/in/elbetunas/"
                target="_blank"
                style={{ color: "#00ffe7" }}
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/RmzGerardo"
                target="_blank"
                className="text-light"
              >
                <FaGithub size={25} />
              </a>
              <button
                className={`btn ${color ? "btn-warning" : "btn-dark"} ms-2`}
                onClick={colorChange}
                style={{
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #00ffe788",
                  fontSize: "1.3rem",
                }}
                title="Cambiar modo oscuro/claro"
              >
                {color ? (
                  <BsSunFill size={20} />
                ) : (
                  <BsCloudMoonFill size={20} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
