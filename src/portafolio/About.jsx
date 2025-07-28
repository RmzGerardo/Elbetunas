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
                Te contaría que mi primera experiencia con el codigo fue lo
                peor.
                <br />
                Pero mi amor por la tecnología me llevó a seguir aprendiendo y
                ahora soy un amante de la programación.
                <br />
                Apasionado por la tecnología, técnico en electrónica y futuro
                desarrollador de software. Me especializo en proyectos de
                iluminación LED y animaciones con código. Ademas mi formacion
                como Desarrollador me permite crear aplicaciones web modernas y
                eficientes. Siempre estoy buscando nuevos retos y oportunidades
                para crecer en el mundo del desarrollo.
              </p>
              <div className="led-strip">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    className="led"
                    key={i}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
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
                    2025
                  </div>
                  <div className="fw-semibold">
                    Pasante de Desarrollo de Software.
                  </div>
                  <div>
                    Desarrollo fullstack en RTP, dando soporte a codigo JS y
                    PHP, creando mejoras de diseño y documentando codigo. <br />
                    Curso React y Node.js.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2024 - Actualidad
                  </div>
                  <div className="fw-semibold">
                    Jefe de Proyecto de animaciones con Leds
                  </div>
                  <div>
                    Programacion de animaciones para luces led con arduino y
                    python en REMORA.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2023
                  </div>
                  <div className="fw-semibold">Técnico en Electrónica</div>
                  <div>
                    Elaboracion de equipos medicos de Fisioterapia en TINEMI.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2022
                  </div>
                  <div className="fw-semibold">Becario en Electrónica</div>
                  <div>
                    Mantenimiento a equipos medicos de Fisioterapia en TINEMI.
                  </div>
                </li>
                <li>
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2020-2025
                  </div>
                  <div className="fw-semibold">
                    Tecnologías de la Información - Desarrollo de Software
                  </div>
                  <div>Universidad UDL</div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
