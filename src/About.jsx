// import { Typewriter } from "react-simple-typewriter";
import spider from "./img/spider.jpg"; // Asegúrate de que la ruta sea correcta

export const About = () => {
  return (
    <>
      <main className="section-fade-up">
        <div className="container-fluid">
          <div className="row align-items-center g-0">
            {/* Columna de texto */}
            <div className="col-12 col-lg-6  col-md-12 d-flex flex-column justify-content-center align-items-start px-5">
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
                lo peor.
                <br />
                Pero mi amor por la tecnología me llevó a seguir aprendiendo y
                ahora soy un apasionado de la programación.
              </p>
              {/* <a
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
              </a> */}
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
        </div>

        <div className="container my-5"></div>
      </main>
    </>
  );
};
