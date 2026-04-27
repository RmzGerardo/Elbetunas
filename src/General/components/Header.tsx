// import { Button } from "primereact/button";
// import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import cheems from "../.././../public/cheems.jfif";
import "../css/App.css";

export const Header = () => {
  // const [modo, setModo] = useState(false);

  // useEffect(() => {
  //   document.body.className = modo ? "dark-mode" : "";
  // }, [modo]);

  // const handleclick = () => {
  //   setModo(!modo);
  //   console.log("Button clicked!");
  // };

  const [text] = useTypewriter({
    words: ["Gerardo Ramírez", "Lic.Informática"],
    loop: Infinity,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <>
      <div className="container" style={{ background: "transparent" }}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <img src={cheems} alt="Cheems" className="img-circle" />
          </div>
        </div>

        <div className="titulo d-flex align-items-center justify-content-center">
          <h1 className="typewriter-title title">
            {text}
            <Cursor />
          </h1>
        </div>
      </div>
    </>
  );
};
