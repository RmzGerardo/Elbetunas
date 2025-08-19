import { useState } from "react";

interface itemProps{
  nombre: string;
  precio: number | undefined;
}

export const ItemCounter = ({nombre, precio=1}: itemProps) => {

  // **** useState es un hook que nos permite crear una variable de estado, y una funcion que actualiza el valor de esa variable
  const [contador, setContador] = useState(precio);

  // **** creamos dos funciones que se encargan de actualizar el valor del contador, una para sumar y otra para restar
  const cuentas = () =>{
    setContador(contador + 1);
  }

  const cuentasResta = () =>{
    if(contador === 1) return; // Evita que el contador baje de 1
    setContador(contador - 1);
  }

//  **** para usar el usestate, se debe crear una variable de estado, 
//  **** y una funcion que actualice el valor de esa variable, se usa el useState, y se le pasa el valor inicial, en este caso 10
//  **** se crea una funcion que se encargue de actualizar el valor de la variable, en este caso se llama cuentas, y se le pasa el valor de la variable contador + 1
//  **** se crea otra funcion que se encargue de actualizar el valor de la variable, en este caso se llama cuentasResta, y se le pasa el valor de la variable contador - 1
//  **** en el boton se le pasa la funcion cuentas, y en el otro boton se le pasa la funcion cuentasResta
//  **** en el span se muestra el valor de la variable contador, que se actualiza cada vez que se hace click en los botones

  return (
    <>
        <section style={{
            width: 150,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: 10,
        }}>

        <span>{nombre}</span>

{/* se pone en el boton la funcion de suma y resta */}
        <button onClick={cuentas}>+1</button>
{/* se pone en el span la variable de contador */}
        <span>{contador}</span>
        <button onClick={cuentasResta}> -1</button> 
        </section>
    </>
  )
}
