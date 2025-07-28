import cubo_3 from "../img/cubo_3.jpg";
import cubo_2 from "../img/cubo_2.jpg";

export const Portafolio = () => {
  const proyectos = [
    {
      nombre: "Proyecto Power by Quest",
      descripcion: "Instalacion de leds para evento musical en Cancun.",
      imagen: "../img/spider.jpg", //
      github: "https://github.com/usuario/tareas",
      demo: "https://tareas-demo.com",
    },
  ];

  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="text-center mb-4" style={{ color: "#00ffe7" }}>
              Habilidades
            </h2>
            <div className="row justify-content-center">
              <div className="col-auto mb-2">
                <span className="badge bg-info text-dark mx-1">
                  <i className="fab fa-react"></i> React
                </span>
                <span className="badge bg-warning text-dark mx-1">
                  <i className="fab fa-js"></i> JavaScript
                </span>
                <span className="badge bg-success text-light mx-1">
                  <i className="fab fa-node"></i> C
                </span>
                <span className="badge bg-primary text-light mx-1">
                  <i className="fab fa-bootstrap"></i> Python
                </span>
                <span className="badge bg-secondary text-light mx-1">
                  <i className="fas fa-database"></i> SQL
                </span>
                <span className="badge bg-dark text-light mx-1">
                  <i className="fas fa-users"></i> CNNA Cisco
                </span>
                <span className="badge bg-dark text-light mx-1">
                  <i className="fas fa-comments"></i> Electronica
                </span>
                <span className="badge bg-dark text-light mx-1">
                  <i className="fas fa-lightbulb"></i> Creatividad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#00ffe7" }}>
          Mi Trayectoria
        </h2>
        <ul
          className="timeline list-unstyled mx-auto"
          style={{ maxWidth: 600 }}
        >
          <li className="mb-4">
            <div className="fw-bold" style={{ color: "#00ffe7" }}>
              2024
            </div>
            <div className="fw-semibold">Power by Quest (Cancún)</div>
            <div>
              Montaje de sistemas de iluminación electrónica para evento
              musical.
            </div>
          </li>
          <li className="mb-4">
            <div className="fw-bold" style={{ color: "#00ffe7" }}>
              2023
            </div>
            <div className="fw-semibold">Freelancer</div>
            <div>
              Desarrollo de aplicaciones web y automatización electrónica.
            </div>
          </li>
          <li className="mb-4">
            <div className="fw-bold" style={{ color: "#00ffe7" }}>
              2022
            </div>
            <div className="fw-semibold">Técnico en Electrónica</div>
            <div>Animaciones con luces LED y soporte técnico en eventos.</div>
          </li>
          <li>
            <div className="fw-bold" style={{ color: "#00ffe7" }}>
              2019-2024
            </div>
            <div className="fw-semibold">
              Estudiante de Tecnologías de la Información
            </div>
            <div>Universidad Tecnológica de Cancún</div>
          </li>
        </ul>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#00ffe7" }}>
          Proyectos Destacados
        </h2>
        <h5 className="text-center m-4">
          Power By Quest Cancun 2024{" "}
          <span className="badge bg-danger">New</span>
        </h5>
        <div className="row justify-content-center">
          <p className="text-center">fhfweiuoh</p>
        </div>

        <div className="row justify-content-center ">
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
        </div>
      </section>
    </>
  );
};
