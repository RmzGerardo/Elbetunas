import { useState } from 'react';

export const Tareas = () => {


    


    const [tareas,setTareas] = useState('');
    const [listaTareas, setListaTareas] = useState([]);


    const colores = {
        rojo: '#ff0000',
        amarillo: '#fcf805ff',
        verde: '#00ff00'
    };

      const cambiarColor = (nombreColor) => {
        setDivColor({backgroundColor: colores[nombreColor]});
    }

   
    const [btnRojo, setBtnRojo] = useState({backgroundColor: '#ff0000'});
    const [btnAmarillo, setBtnAmarillo] = useState({backgroundColor: '#fcf805ff'});
    const [btnVerde, setBtnVerde] = useState({backgroundColor: '#00ff00'});

    const [divColor, setDivColor] = useState({});

    const botonCambiar = () => {
        setDivColor(btnRojo);
    }

    const botonCambiarAmarillo = () => {
        setDivColor(btnAmarillo);
    }

    const botonCambiarVerde = () => {
        setDivColor(btnVerde);
    }


    const recuperarInput = (event) => {
        const input = event.target.value;
        setTareas(input);
    }

  

    const agregar = () => {
        if(tareas.trim() === '') {
            alert('Por favor, ingresa una tarea válida.');
            return;
        }
        setListaTareas([...listaTareas, tareas]);
        setTareas(''); // Limpiar el input después de agregar
        console.log(`Tarea agregada: ${tareas}`);
    }

    const limpiar = () => {
        setListaTareas([]);
    }
    return (
        <>
        <div className='div-re'>
        <h1>Tareas Simples</h1>
        <input type="text" className='InputTareas' value={tareas} onChange={recuperarInput}  />
        <ul>
           
            {listaTareas.map((tarea,index) => (
                <li key= {index}>{tarea}</li>
            ))}
           
        </ul>
        <button onClick={agregar}>Agregar tarea</button>
        <button onClick={limpiar}>Limpiar todo</button>

        <br />
        <h4>Semaforo</h4>
        <div>
            <button className='rojo' onClick={() => cambiarColor('rojo')}>Rojo</button>
            <button className='amarillo' onClick={() => cambiarColor('amarillo')}>Amarillo</button>
            <button className='verde' onClick={() => cambiarColor('verde')}>Verde</button>        </div>

        <div className='semaforo' style={divColor} >  
            <p>hola</p>
        </div>
        </div>
        
        </>
    )
}