import { useState, useEffect, use } from "react";

export const Message = () => {
  useEffect(() => {
    const onmouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onmouseMove);

    return () => {
      window.removeEventListener("mousemove", onmouseMove);
    };
  }, []);

  return (
    <>
      <br />
      <h3>usuario ya existe</h3>
    </>
  );
};
