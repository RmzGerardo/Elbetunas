// *** estado con objeto para
import { useState } from "react";

export const HookApp = () => {
  const [user, setUser] = useState({ nombre: "", edad: "" });

  return (
    <>
      <input
        type="text"
        placeholder="nombre"
        value={user.nombre}
        onChange={(e) => setUser({ ...user, nombre: e.target.value })}
      />
      <input
        type="number"
        placeholder="Edad"
        value={user.edad}
        onChange={(e) => setUser({ ...user, edad: e.target.value })}
      />
      <p>Nombre: {user.nombre}</p>
      <p>Edad: {user.edad}</p>

      <hr />
    </>
  );
};
