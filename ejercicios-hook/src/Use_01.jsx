// *** ejemplo de mostrar y ocultar un elemento
import { useState } from "react";

// Componente funcional
export const Use_01 = () => {
  // Hook useState para controlar si el texto es visible o no
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Botón que alterna el valor de visible entre true y false */}
      <button onClick={() => setVisible(!visible)}>
        {/* El texto del botón cambia según el estado */}
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {/* Si visible es true, se muestra el texto. Si es false, no se muestra nada */}
      {visible && <p>¡Este texto se puede ocultar!</p>}
    </>
  );
};
