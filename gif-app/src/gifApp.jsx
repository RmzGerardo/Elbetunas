import { useState } from 'react';

export const GifApp = () => {

  // siempre sera un arreglo
  const [categorias, setcategorias] = useState(['Dragon Ball', 'Naruto','Super Campeones', 'One Piece']);
  const nuevaCategoria = [
    'Dragon Ball GT',
    'Dragon Ball Super',
  ]

  const agregarCategoria = () => {

  setcategorias([...categorias, ...nuevaCategoria]);
  }


  
  const [inputValue, setInputValue] = useState('');
  const [elementosInput, setElementosInput] = useState([]);
  const input = (event) => {
    const valor = event.target.value;
    setInputValue(valor);
    // console.log(valor);
  }

  const agregar = () => {
      if (inputValue.trim() !== '') { // Verificar que no esté vacío
      setcategorias([...categorias, inputValue]); // Agregar solo inputValue, no spread
       setElementosInput([...elementosInput, inputValue]); // Guardar qué agregamos desde input
      setInputValue(''); // Limpiar el input después de agregar
      console.log([...categorias, inputValue]); // Mostrar cómo quedará el array  }
    }
  }

// categorias.filter() = Crea un nuevo arreglo con solo los elementos que cumplan una condición
// !nuevaCategoria.includes(categoria) = Mantiene solo las categorías que NO están en nuevaCategoria
  const borrar = () => {
    setcategorias(categorias.filter(categoria => 
      !nuevaCategoria.includes(categoria) && !elementosInput.includes(categoria)
    ));      
    setElementosInput([]); 
  }
  // Si categorias = ['Dragon Ball', 'Naruto', 'Super Campeones', 'One Piece', 'Dragon Ball GT', 'Dragon Ball Super']
  // Y nuevaCategoria = ['Dragon Ball GT', 'Dragon Ball Super']

  // Después de borrar quedará:
  // ['Dragon Ball', 'Naruto', 'Super Campeones', 'One Piece']


  return (
    <>
    
      <h1>Gif App</h1>
      {/* <input type="text" value={lista} onChange={input}/> */}
      <input type="text" value={inputValue} onChange={input}/>

      <div className="input-container">
      <button onClick={agregarCategoria}>Agregar</button>
      <button onClick={agregar}>Agregar nuevo dato</button>
      <button onClick={borrar}>Borrar</button>
      </div>

    <ol>
      {/* esto es la forma de como recorrer un arreglo*/}
      {
        categorias.map((categorias,index) => {
          return <li key={categorias + index}>{categorias}</li>
        })
      }
    </ol>
    </>
  )
}

