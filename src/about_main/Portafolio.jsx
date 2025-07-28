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
      <section className="container my-5 section-fade-up">
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
