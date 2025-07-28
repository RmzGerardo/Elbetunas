// import spider from "../img/spider.jpg"; // Asegúrate de que la ruta sea correcta
import cubo from "../img/cubo.jpg"; // Asegúrate de que la ruta sea correcta
import cubo_2 from "../img/cubo_2.jpg"; // Asegúrate de que la ruta sea correcta
import cubo_3 from "../img/cubo_3.jpg"; // Asegúrate de que la ruta sea correcta
import cubo_4 from "../img/cubo_4.jpg"; // Asegúrate de que la ruta sea correcta

export const Life = () => {
  const proyectos = [
    {
      nombre: "Proyecto Power by Quest",
      descripcion: "Instalacion de leds para evento musical en Cancun.",
      imagen: "../img/spider.jpg", // pon la ruta de tu imagen
      github: "https://github.com/usuario/tareas",
      demo: "https://tareas-demo.com",
    },
    // ...más proyectos
  ];

  return (
    <>
      <section className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#00ffe7" }}>
          Proyectos Destacados
        </h2>
        <h5 className="text-center m-4">
          Power By Quest Cancun 2024{" "}
          <span className="badge bg-danger">New</span>
        </h5>
        {/* <div className="text-center mb-3">
          <button className="btn btn-success life-detalle">Ver detalles</button>
        </div> */}
        <div className="row justify-content-center ">
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_2}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_3}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <img
              src={cubo_4}
              alt=""
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
          {/* ...más columnas si quieres */}
        </div>

        <div
          className="row g-0 bg-danger position-relative carta-foto align-items-center"
          style={{
            maxWidth: "900px",
            margin: "2rem auto",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 p-4 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid foto_carta"
              src={cubo}
              alt=""
              style={{
                maxWidth: "350px",
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h5 className="mt-2 text-black text-life">
              Montaje de luces NeonFlex en evento musical
            </h5>
            <p
              className="text-black mt-3 text-life"
              style={{ marginBottom: 0 }}
            >
              Como parte del equipo técnico de Rémora, colaboramos en el montaje
              e instalación de sistemas de iluminación electrónica para diversos
              escenarios diseñados específicamente para el evento musical Power
              by Quest, realizado en Cancún.
              <br />
              <br />
              Este proyecto representó una valiosa oportunidad de crecimiento
              tanto en el ámbito profesional como personal. Me permitió
              fortalecer mis habilidades técnicas en electrónica aplicada a
              espectáculos, así como mejorar mi capacidad de trabajo en equipo,
              resolución de problemas en campo y adaptación a entornos de alto
              ritmo y exigencia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
