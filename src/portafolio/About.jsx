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
                  color: "#ffffff",
                  fontSize: "1.3rem",
                  lineHeight: "1.8",
                  fontWeight: "600",
                }}
                className="mt-3 text-center text-lg-start"
              >
                Mi pasión por la tecnología nació entre{" "}
                <span style={{ color: "#00ffe7" }}>
                  circuitos y animaciones LED
                </span>
                . Esa curiosidad por el hardware me impulsó a dar el salto al
                software, donde descubrí que con el código no existen límites
                para la creatividad.
              </p>
              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
                className="mt-3 text-center text-lg-start"
              >
                A nivel profesional, he aportado valor durante{" "}
                <strong style={{ color: "#ffffff" }}>
                  año y medio en el RTP de la CDMX
                </strong>
                , diseñando y manteniendo aplicaciones robustas con{" "}
                <strong style={{ color: "#00ffe7" }}>React y PHP</strong>.
                Además, me entusiasma integrar soluciones potenciadas por{" "}
                <strong style={{ color: "#ffffff" }}>
                  Inteligencia Artificial
                </strong>{" "}
                para optimizar procesos y construir productos digitales de alto
                impacto.
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
                href="/downlands/Gerardo-RamirezCV2026.pdf"
                download
                className="btn btn-descargar btn-cv mt-4"
              >
                Descargar CV
              </a>
            </div>

            {/* Columna de imagen */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5">
              <div className="card carta-tamaño carta">
                <img className="card-img-top" src={spider} alt="Gerardo" />
                <div className="card-body carta text-center py-3">
                  <p className="card-text fw-bold mb-0" style={{ fontSize: "1.1rem", letterSpacing: "0.5px" }}>
                    Desarrollador Full-Stack Junior
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center gap-3">
                    <i className="fa-solid fa-code" style={{ color: "#00ffe7", width: "20px", textAlign: "center" }}></i>
                    <span>React.js | Node.js | Express | JavaScript</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-3">
                    <i className="fa-solid fa-microchip" style={{ color: "#00ffe7", width: "20px", textAlign: "center" }}></i>
                    <span>Electrónica | Animaciones con LEDs</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-3">
                    <i className="fa-solid fa-lightbulb" style={{ color: "#00ffe7", width: "20px", textAlign: "center" }}></i>
                    <span>Siempre innovando en cada proyecto que realizo.</span>
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
              <ul className="timeline list-unstyled mx-auto" style={{ maxWidth: 600 }}>
                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    Julio 2026 - Actualidad
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Desarrollo Full-Stack y Proyectos Personales
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Construcción de sistemas desde cero, incluyendo plataformas
                    de gestión de económicos y clones de redes sociales,
                    aplicando arquitectura backend y frontend con JavaScript,
                    TypeScript, React, PHP y Docker.
                  </div>
                </li>

                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    Enero 2025 - Junio 2026
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Desarrollador de Software Jr.
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Desarrollo full-stack en la Red de Transporte de Pasajeros
                    (RTP) de la CDMX. Soporte y mantenimiento a código JS y PHP,
                    creación de mejoras a nivel de sistema e implementación de
                    herramientas con React, Node.js e Inteligencia Artificial.
                  </div>
                </li>

                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2024
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Jefe de Proyecto de animaciones con LEDs
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Programación de animaciones para luces LED utilizando
                    Arduino y Python en REMORA.
                  </div>
                </li>

                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2023
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Técnico en Electrónica
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Elaboración y ensamblaje de equipos médicos de fisioterapia
                    en TINEMI.
                  </div>
                </li>

                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2022
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Becario en Electrónica
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Mantenimiento preventivo y correctivo a equipos médicos de
                    fisioterapia en TINEMI.
                  </div>
                </li>

                <li className="mb-4">
                  <div className="fw-bold" style={{ color: "#00ffe7" }}>
                    2020 - 2025
                  </div>
                  <div className="fw-semibold" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    Tecnologías de la Información - Desarrollo de Software
                  </div>
                  <div style={{ color: "#cfcfcf", fontSize: "0.95rem", marginTop: "4px" }}>
                    Universidad UDL
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
