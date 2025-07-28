import spider from "../img/spider.jpg";

export const About = () => {
  return (
    <>
      <main className="section-fade-up">
        <div className="container-fluid">
          <div className="row align-items-center g-0">
            {/* Columna de texto */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center px-3 px-lg-5">
              <h1
                className="text-center"
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
                  fontWeight: "500",
                }}
                className="mt-2"
              >
                Te contaría que mi primera experiencia con la programación fue
                lo peor.
                <br />
                Pero mi amor por la tecnología me llevó a seguir aprendiendo y
                ahora soy un apasionado de la programación.
              </p>
              <a
                href="/downlands/joystick.png"
                download
                className="btn btn-descargar btn-cv mt-4"
              >
                Descargar CV
              </a>
            </div>

            {/* Columna de imagen */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5">
              <div className="card carta-tamaño carta ">
                <img className="card-img-top" src={spider} alt="Gerardo" />
                <div className="card-body carta">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                    Estudiante de Tecnologias de la Informacion en el ultimo
                    cuatrimestre.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    💻 Preparandome en el desarrollo de software moderno.
                  </li>
                  <li className="list-group-item">
                    🔧 Técnico en Electrónica con habilidades en animaciones con
                    luces led.
                  </li>
                  <li className="list-group-item">
                    🚀 Freelancer, siempre abierto a nuevos retos y
                    colaboraciones.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
