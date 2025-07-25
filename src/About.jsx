// import { Typewriter } from "react-simple-typewriter";
import spider from "./img/spider.jpg"; // Asegúrate de que la ruta sea correcta

export const About = () => {
  return (
    <>
      <main>
        <div className="container-fluid mt-5">
          <div className="row justify-content-center ">
            <div className="col-12 text-center">
              {/* <h2 className="code-title">
                <span className="code-brace">{"{"}</span>
                <span className="code-key">
                  <Typewriter
                    words={["Sobre Mi"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <span className="code-brace">{"}"}</span>
              </h2> */}

              <h2>Gerardo </h2>
              <h3>Desarollador de Software</h3>
              <p className="text-exp">
                HTML | CSS | JAVASCRIPT | CCNA CISCO | ELECTRONICA | BASES DE
                DATOS
              </p>
            </div>
          </div>

          <div className="row mt-5 m-5 pt-4 text-center gap-5">
            <div className="col carta-section">
              <h4 className="m-3">Formacion</h4>
              <div className="col-auto d-flex justify-content-center align-items-center  m-5">
                <img src={spider} className="img-circle" alt="Spider" />
              </div>
              {/* <p>Universidad de Londres</p> */}
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
          </div>

          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={spider} className="img-circle" alt="Spider" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
