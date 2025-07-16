
import { useState } from 'react';

export const Boton = () => {

    // aqui afuera va todo el codigo de js, funciones, variables, etc.
    const [numero, setNumero] = useState(1);
    const [palabra, setTexto] = useState('Texto incial');

    const plus = () => {
        setNumero(numero + 1);
    }

    const menos = () => {
        setNumero(numero - 1);
    }

    const reset = ( ) => {
        setNumero(0);
    }


    const texto = () => {
        setTexto('Texto cambiado con useState desde jsx');

    }

    const alerta = () => {
        alert('¡Botón presionado!');
    }
    
    return (
        <>
        <div className="div-re">
        <button onClick={plus} id="boton">Hacer clic {numero}</button>
        <span >{numero} Pulsasiones</span>
        <button onClick={reset} id="boton">borrar pulsasiones</button>
        <button onClick={menos} id="boton">menos pulsasiones</button>
        <span >{palabra}</span>
        <button onClick={texto} id="boton">Cambiar texto</button>
        </div>
        </>
    )
}