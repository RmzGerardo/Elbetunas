import cubo_3 from "../img/cubo_3.jpg";
import cubo_2 from "../img/cubo_2.jpg";
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
  useEffect(() => {
    // Espera a que el DOM esté listo
    const toastEl = document.getElementById("miToast");
    if (toastEl && window.bootstrap) {
      const toast = new window.bootstrap.Toast(toastEl);
      toast.show();
    }
  }, []);

  const proyectos = [
    {
      nombre: "Proyecto Power by Quest",
      descripcion:
        "Instalacion de leds para evento musical en Cancun programados con arduino y python.",
      imagen: q_6,
      codigo: "https://github.com/...",
      demo: "https://demo.com",
    },
    {
      nombre: "Logo Apple Music NeonFlex",
      descripcion:
        "Elaboracion de logo APPLE MUSIC con NeonFlex, programado con controlador WiFi.",
      imagen: a_2,
      codigo: "https://github.com/...",
      demo: "https://demo.com",
    },
    {
      nombre: "Evento Fascinoma 2024",
      descripcion:
        "Instalacion de escuadras leds con una consola de dmx hecha con rassberry pi.",
      imagen: f_1,
      codigo: "https://github.com/...",
      demo: "https://demo.com",
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
        <h2 className="text-center mb-1" style={{ color: "#00ffe7" }}>
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

        <div className="row justify-content-center">
          {proyectos.map((proyectos, i) => (
            <div
              className="col-12 col-md-4 mt-4 d-flex flex-column align-items-center"
              key={i}
            >
              <img
                src={proyectos.imagen}
                style={{
                  width: "90%",
                  height: "300px",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
                data-bs-toggle="modal"
                data-bs-target="#modalProyecto1"
              />
              <h5 className="text-center m-2">
                {proyectos.nombre} <span className="badge bg-danger">New</span>
              </h5>
              <p className="text-center" style={{ color: "#fafafa" }}>
                {proyectos.descripcion}
              </p>
              <div>
                <a
                  href={proyectos.codigo}
                  className="btn btn-sm btn-outline-info me-2"
                  target="_blank"
                >
                  Código
                </a>
                <a
                  href={proyectos.demo}
                  className="btn btn-sm btn-outline-success"
                  target="_blank"
                >
                  Demo
                </a>
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
          <div className="modal-content" style={{ background: "#232136" }}>
            <div className="modal-header border-0">
              <h5
                className="modal-title"
                id="modalProyecto1Label"
                style={{ color: "#00ffe7" }}
              >
                Power By Quest Cancun 2024
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              {/* Carrusel Bootstrap */}
              <div
                id="carouselProyecto1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={cubo_2}
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
                  {/* Puedes agregar más imágenes aquí */}
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
    </>
  );
};
