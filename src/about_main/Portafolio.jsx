import SUGO from "../img/RTP.jpg";
import admin from "../img/admin.png";
import siteg from "../img/siteg.png";
import cubo_2 from "../img/cubo_2.jpg";
import cubo_3 from "../img/cubo_3.jpg";
import cubo_4 from "../img/cubo_4.jpg";

import q_6 from "../img/quest/q_6.jpg";
import q_9 from "../img/quest/q_9.jpg";
import q_8 from "../img/quest/q_8.jpg";
import q_7 from "../img/quest/q_7.jpg";

// logo apple
import a_2 from "../img/logo/a_2.jpg";

// fascinima
import f_1 from "../img/fascinoma/f_1.jpg";
import f_5 from "../img/fascinoma/f_5.mp4";

import { useEffect } from "react";

export const Portafolio = () => {
  const proyectos = [
    {
      id: "modalProyecto1",
      nombre: "Proyecto Power by Quest",
      subtitulo: "Iluminación & Electrónica",
      descripcion:
        "Instalación de LEDs a gran escala para un escenario musical en Cancún, programada y controlada con Arduino y Python.",
      imagen: q_6,
      codigo: "https://github.com/RmzGerardo",
      demo: "https://www.linkedin.com/in/elbetunas/",
      tecnologias: ["Arduino", "Python", "LEDs"],
    },
    {
      id: "modalProyecto2",
      nombre: "Sistema de Control de Inventario y Flota",
      subtitulo: "Programación Full-Stack",
      descripcion:
        "Sistema web de administración interna para despachos, salidas y mantenimiento de los autobuses de la Red de Transporte de Pasajeros de la Ciudad de México.",
      imagen: SUGO,
      codigo: "https://github.com/RmzGerardo",
      demo: "https://www.linkedin.com/in/elbetunas/",
      tecnologias: ["React", "Express", "PostgreSQL", "Docker", "PrimeReact"],
    },
    {
      id: "modalProyecto3",
      nombre: "Sistema de permisos para módulos internos de RTP",
      subtitulo: "Programación Full-Stack",
      descripcion:
        "Sistema de permisos para dar de alta, baja y asignar roles en los diferentes sistemas internos de la RTP.",
      imagen: admin,
      codigo: "https://github.com/RmzGerardo",
      demo: "https://www.linkedin.com/in/elbetunas/",
      tecnologias: ["PHP", "JavaScript", "PostgreSQL", "Bootstrap"],
    },
    {
      id: "modalProyecto4",
      nombre: "Contenedor de Sistemas Integrados",
      subtitulo: "Programación Full-Stack",
      descripcion:
        "Plataforma web diseñada para centralizar y alojar múltiples sistemas en un solo contenedor, facilitando el acceso a todos ellos con un solo clic.",
      imagen: siteg,
      codigo: "https://github.com/RmzGerardo",
      demo: "https://www.linkedin.com/in/elbetunas/",
      tecnologias: ["JavaScript", "PostgreSQL", "PHP", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <>
      {/* ... */}
      <div
        className="toast"
        id="miToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ position: "fixed", top: 30, right: 20, zIndex: 9999 }}
      >
        <div className="toast-header">
          <img
            src={cubo_2}
            alt="Proyecto 1"
            style={{ width: 24, height: 24, borderRadius: 4 }}
          />
          <strong className="me-auto">¡Bienvenido!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          Explora mis proyectos destacados. <br /> Puedes dar click a la foto
          par ver mas.
        </div>
      </div>

      {/* ... */}
      <section className="container my-5 section-fade-up">
        <h2 className="text-center mb-1" style={{ color: "#4fa3e3" }}>
          Proyectos Destacados
        </h2>

        <div className="row justify-content-center m-3">
          <p className="text-center ">
            Mi formacion me ha permitido trabajar en electronica y desarrollo de
            software, creando soluciones innovadoras y eficientes.
          </p>
        </div>

        {/* <div className="row justify-content-center ">
          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_2}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_3}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_3}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>

          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_2}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_2}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_2}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
        </div> */}

        <div className="row justify-content-center g-4">
          {proyectos.map((proyecto, i) => (
            <div
              className="col-12 col-md-6 col-lg-3 mt-4 d-flex justify-content-center"
              key={i}
            >
              <div
                className="project-card"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "300px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                data-bs-toggle="modal"
                data-bs-target={`#${proyecto.id}`}
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="project-card-img"
                  />
                  <span
                    className="position-absolute badge"
                    style={{
                      backgroundColor: proyecto.subtitulo.includes("Electrónica")
                        ? "#e53e3e"
                        : "#1e7cc9",
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      borderRadius: "8px",
                      top: "12px",
                      left: "12px",
                    }}
                  >
                    {proyecto.subtitulo}
                  </span>
                </div>
                <div
                  className="p-3 d-flex flex-column justify-content-between flex-grow-1"
                  style={{ minHeight: "200px" }}
                >
                  <div>
                    <h5
                      className="fw-bold mb-2 text-white"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {proyecto.nombre}
                    </h5>
                    <p
                      style={{
                        color: "#cfcfcf",
                        fontSize: "0.85rem",
                        lineHeight: "1.5",
                        margin: 0,
                      }}
                    >
                      {proyecto.descripcion}
                    </p>
                    <div className="d-flex flex-wrap gap-1 mt-3">
                      {proyecto.tecnologias &&
                        proyecto.tecnologias.map((tech, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: "0.68rem",
                              padding: "2px 8px",
                              background: "rgba(30, 124, 201, 0.15)",
                              border: "1px solid rgba(30, 124, 201, 0.3)",
                              borderRadius: "12px",
                              color: "#90cdf4",
                              fontWeight: "500",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center mt-3 pt-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span
                      className="fw-bold"
                      style={{ color: "#4fa3e3", fontSize: "0.85rem" }}
                    >
                      Ver detalles{" "}
                      <i
                        className="fas fa-arrow-right ms-1"
                        style={{ fontSize: "0.75rem" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal con carrusel */}
      <div
        className="modal fade"
        id="modalProyecto1"
        tabIndex="-1"
        aria-labelledby="modalProyecto1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header custom-header">
              <h5
                className="modal-title fw-bold"
                id="modalProyecto1Label"
                style={{ color: "#4fa3e3" }}
              >
                Power By Quest Cancun 2024
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body custom-body">
              {/* Carrusel Bootstrap */}
              <div
                id="carouselProyecto1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={SUGO}
                      className="d-block w-100 rounded"
                      alt="Foto 1"
                      style={{
                        maxWidth: "500px",
                        maxHeight: "600px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={q_6}
                      className="d-block w-100 rounded"
                      alt="Foto 2"
                      style={{
                        maxWidth: "500px",
                        maxHeight: "500px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={q_9}
                      className="d-block w-100 rounded"
                      alt="Foto 2"
                      style={{
                        maxWidth: "500px",
                        maxHeight: "500px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={q_8}
                      className="d-block w-100 rounded"
                      alt="Foto 2"
                      style={{
                        maxWidth: "665px",
                        maxHeight: "600px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <video
                      src={f_5}
                      className="d-block w-100 rounded"
                      style={{
                        maxWidth: "500px",
                        maxHeight: "500px",
                        margin: "0 auto",
                        borderRadius: "16px",
                      }}
                      controls
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProyecto1"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProyecto1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
              <p className="mt-3" style={{ color: "#fafafa" }}>
                Instalación de leds para evento musical en Cancún programados
                con arduino y python.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Proyecto 2 */}
      <div
        className="modal fade"
        id="modalProyecto2"
        tabIndex="-1"
        aria-labelledby="modalProyecto2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header custom-header">
              <h5
                className="modal-title fw-bold"
                id="modalProyecto2Label"
                style={{ color: "#4fa3e3" }}
              >
                Sistema de Gestión Operativa de Autobuses de RTP
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body custom-body text-light">
              <div className="row g-4">
                <div className="col-12 col-md-5 d-flex align-items-center">
                  <div className="modal-img-container w-100">
                    <img
                      src={SUGO}
                      className="w-100"
                      alt="RTP Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <h6 className="modal-label">
                    <i className="fas fa-file-alt"></i> Descripción del Proyecto
                  </h6>
                  <p
                    style={{
                      color: "#cfcfcf",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Principalmente le di mantenimiento al sistema{" "}
                    <strong>(versión 1)</strong>, el cual está construido con
                    React (JSX) con Express y PostgreSQL. Todo esto con Docker.
                    <br />
                    Ya que el sistema era legado, tuve que tomar la decisión de
                    rehacerlo con nuevas versiones de React y Express.
                  </p>
                  <h6 className="modal-label">
                    <i className="fas fa-list-ul"></i> Características Clave
                  </h6>
                  <ul className="modal-feature-list">
                    <li>
                      Monitoreo 24/7 del sistema para un correcto
                      funcionamiento.
                    </li>
                    <li>
                      Nuevas funciones con la versión 2 del sistema (Carga de
                      archivos tipo CSV para la carga masiva de datos).
                    </li>
                    <li>
                      Código basado en componentes, esto facilita el
                      mantenimiento.
                    </li>
                  </ul>
                  <h6 className="modal-label">
                    <i className="fas fa-laptop-code"></i> Tecnologías Utilizadas
                  </h6>
                  <div className="d-flex flex-wrap mt-2">
                    <span className="badge modal-tech-badge">
                      React.js
                    </span>
                    <span className="badge modal-tech-badge">
                      Express
                    </span>
                    <span className="badge modal-tech-badge">
                      PostgreSQL
                    </span>
                    <span className="badge modal-tech-badge">
                      Bootstrap Y PrimeReact
                    </span>
                    <span className="badge modal-tech-badge">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Proyecto 3 */}
      <div
        className="modal fade"
        id="modalProyecto3"
        tabIndex="-1"
        aria-labelledby="modalProyecto3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header custom-header">
              <h5
                className="modal-title fw-bold"
                id="modalProyecto3Label"
                style={{ color: "#4fa3e3" }}
              >
                Sistema de permisos para módulos internos de RTP
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body custom-body text-light">
              <div className="row g-4">
                <div className="col-12 col-md-5 d-flex align-items-center">
                  <div className="modal-img-container w-100">
                    <img
                      src={admin}
                      className="w-100"
                      alt="Permissions Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <h6 className="modal-label">
                    <i className="fas fa-file-alt"></i> Descripción del Proyecto
                  </h6>
                  <p
                    style={{
                      color: "#cfcfcf",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Realicé un diseño completamente nuevo basado en el diseño
                    anterior, poniendo más innovación al diseño de la interfaz,
                    usando JavaScript moderno y PHP.
                  </p>
                  <h6 className="modal-label">
                    <i className="fas fa-list-ul"></i> Características Clave
                  </h6>
                  <ul className="modal-feature-list">
                    <li>
                      Alta, baja y modificación de usuarios y cuentas de
                      sistemas internos.
                    </li>
                    <li>
                      Asignación dinámica de roles y permisos granulares por
                      módulo operativo.
                    </li>
                    <li>
                      Interfaz de administración fluida con navegación y carga
                      de datos optimizadas.
                    </li>
                    <li>
                      Historial y bitácora de auditoría para el control de
                      cambios de seguridad.
                    </li>
                  </ul>
                  <h6 className="modal-label">
                    <i className="fas fa-laptop-code"></i> Tecnologías Utilizadas
                  </h6>
                  <div className="d-flex flex-wrap mt-2">
                    <span className="badge modal-tech-badge">
                      PHP
                    </span>
                    <span className="badge modal-tech-badge">
                      JavaScript (ES6+)
                    </span>
                    <span className="badge modal-tech-badge">
                      PostgreSQL
                    </span>
                    <span className="badge modal-tech-badge">
                      Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Proyecto 4 */}
      <div
        className="modal fade"
        id="modalProyecto4"
        tabIndex="-1"
        aria-labelledby="modalProyecto4Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header custom-header">
              <h5
                className="modal-title fw-bold"
                id="modalProyecto4Label"
                style={{ color: "#4fa3e3" }}
              >
                Contenedor de Sistemas Integrados
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body custom-body text-light">
              <div className="row g-4">
                <div className="col-12 col-md-5 d-flex align-items-center">
                  <div className="modal-img-container w-100">
                    <img
                      src={siteg}
                      className="w-100"
                      alt="Integrated Systems Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <h6 className="modal-label">
                    <i className="fas fa-file-alt"></i> Descripción del Proyecto
                  </h6>
                  <p
                    style={{
                      color: "#cfcfcf",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Realicé la arquitectura de carpetas, la estructura de código y las funciones que serán reutilizables, usando export, async-await y el DOM como puntos fuertes.
                  </p>
                  <h6 className="modal-label">
                    <i className="fas fa-list-ul"></i> Características Clave
                  </h6>
                  <ul className="modal-feature-list">
                    <li>Documentación basada en arquitectura monolítica.</li>
                    <li>Implementación de contenedores (Docker).</li>
                    <li>Desarrollo de funciones basadas en escribir menos código.</li>
                    <li>Implementación de GitHub Actions para automatizar Git.</li>
                  </ul>
                  <h6 className="modal-label">
                    <i className="fas fa-laptop-code"></i> Tecnologías Utilizadas
                  </h6>
                  <div className="d-flex flex-wrap mt-2">
                    <span className="badge modal-tech-badge">
                      JavaScript (ES6+)
                    </span>
                    <span className="badge modal-tech-badge">
                      PostgreSQL
                    </span>
                    <span className="badge modal-tech-badge">
                      PHP
                    </span>
                    <span className="badge modal-tech-badge">
                      Docker
                    </span>
                    <span className="badge modal-tech-badge">
                      GitHub Actions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
