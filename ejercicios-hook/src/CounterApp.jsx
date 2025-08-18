import { use, useState } from "react";

export const CounterApp = () => {
  // ******* con arrays

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputV = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  //   ** estado con array
  //   const add = () => {
  //     setItems([...inputValue, `Item ${inputValue.length + 1}`]);
  //   };
  //   ** estado con array
  //   const add = () => {
  //     setItems([...inputValue, `Item ${inputValue.length + 1}`]);
  //   };

  const add = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  // * estado con texto
  const [text, setTexto] = useState({
    texto1: "Hola Mundo",
    texto2: "Hola Mundo 2",
    texto3: "Hola Mundo 3",
  });
  const { texto1, texto2, texto3 } = text;

  //   *contador
  //   const [contador, setContador] = useState(0);
  const [state, setContador] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>{texto1}</h1>
      <h1>{texto2}</h1>
      <h1>{texto3}</h1>
      <hr />
      <h1>Counter: {counter1} </h1>
      <h1>Counter: {counter2} </h1>
      <h1>Counter: {counter3} </h1>
      <hr />
      <button
        className="btn btn-success"
        onClick={() =>
          setContador({
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 + 1,
            counter3: counter3 + 1,
          })
        }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          setTexto({
            ...text,
            texto1: "Cambio Texto 1",
            texto2: "texto Texto 2",
            texto3: "react Texto 3",
          })
        }
      >
        Cambiar Texto
      </button>
      <hr />
      <input type="text" value={inputValue} onChange={inputV} />
      <button onClick={add} type="button" className="btn btn-outline-primary">
        Agregar
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};
