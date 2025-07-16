import { useState } from 'react';

export const Tareas = () => {


    const [tareas,setTareas] = useState('');
    const [listaTareas, setListaTareas] = useState([]);


    const recuperarInput = (event) => {
        const input = event.target.value;
        setTareas(input);
    }

    const agregar = () => {
        console.log(`Tarea agregada: ${tareas}`);
    }

    const limpiar = () => {
        setListaTareas([]);
    }
    return (
        <>
        <div className='div-re'>
        <h1>Tareas Simples</h1>
        <input type="text" className='InputTareas' value={tareas} /* valor actual1 */ onChange={recuperarInput} /* funcion para cambios */ />
        <ul>
           
            {listarTareas.map((tarea,index) => (
                <li key= {index}>{tarea}</li>
            ))}
           
        </ul>
        <button onClick={agregar}>Agregar tarea</button>
        <button onClick={limpiar}>Limpiar todo</button>
        </div>
        
        </>
    )
}