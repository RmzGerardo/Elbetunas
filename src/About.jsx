// import { Typewriter } from "react-simple-typewriter";
import spider from "./img/spider.jpg"; // Asegúrate de que la ruta sea correcta

export const About = () => {
  return (
    <>
      <main className="section-fade-up">
        <div className="container-fluid">
          <div className="row align-items-center g-0">
            {/* Columna de texto */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start px-5">
              <h1
                className="text-cen"
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "#fff",
                }}
              >
                I'm <span style={{ color: "#00ffe7" }}>Gerardo</span> Ramirez
              </h1>
              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "1.2rem",
                }}
              >
                Te contaría que mi primera experiencia con la programación fue
                lo peor..
                <br />
                Pero mi amor por la tecnología me llevó a seguir aprendiendo y
                ahora soy un apasionado de la programación.
              </p>
              <a
                href="#"
                className="btn btn-cv mt-4"
                style={{
                  background: "#00ffe7",
                  color: "#232136",
                  fontWeight: "bold",
                  borderRadius: "2em",
                  padding: "0.7em 2em",
                  boxShadow: "0 4px 16px #00ffe788",
                  fontSize: "1.1rem",
                  border: "none",
                }}
              >
                Descargar CV
              </a>
            </div>
            {/* Columna de imagen */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="">
                <img
                  className="img-border card"
                  src={spider}
                  alt="Gerardo"
                  style={{
                    width: "340px",
                    height: "420px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
          {/* 
          <div iv className="row mt-5 m-5 pt-4 text-center gap-5">
            <div className="col carta-section">
              <h4 className="m-3">Formacion</h4>
              <div className="col-auto d-flex justify-content-center align-items-center  m-5">
                <img src={spider} className="img-circle" alt="Spider" />
              </div>
              <p>Universidad de Londres</p>
              <p>Ingeniero en Informatica</p>
              <p>Tecnico en Mantenimiendo a Equipos de Compúto</p>
            </div>
            <div className="col carta-section">
              <h4 className="m-3">Experiencia Profesional</h4>
              <div className="col-auto d-flex justify-content-center align-items-center  m-5">
                <img src={spider} className="img-circle" alt="Spider" />
              </div>
              <p>Desarrollador </p>
            </div>
            <div className="col carta-section">
              <h4 className="m-3">Hola</h4>
              <div className="col-auto d-flex justify-content-center align-items-center m-5">
                <img src={spider} className="img-circle" alt="Spider" />
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="container mt-3 my-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="card bg-dark  bg-mode text-light"
                style={{ borderRadius: "8px", overflow: "hidden" }}
              >
                <img
                  src={spider}
                  className="card-img-top"
                  alt="Spider"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Estudiante de TI en el ultimo cuatrimestre de la carrera en
                    la Universidad de Londres..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="card bg-dark bg-mode text-light"
                style={{ borderRadius: "8px", overflow: "hidden" }}
              >
                <img
                  src={spider}
                  className="card-img-top"
                  alt="Spider"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="card bg-dark bg-mode text-light"
                style={{ borderRadius: "8px", overflow: "hidden" }}
              >
                <img
                  src={spider}
                  className="card-img-top"
                  alt="Spider"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container my-5"></div>
      </main>
    </>
  );
};
