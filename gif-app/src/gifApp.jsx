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

  console.log(categorias);


// categorias.filter() = Crea un nuevo arreglo con solo los elementos que cumplan una condición
// !nuevaCategoria.includes(categoria) = Mantiene solo las categorías que NO están en nuevaCategoria
  const borrar = () => {
    setcategorias(categorias.filter(categoria => !nuevaCategoria.includes(categoria)));
  }
  // Si categorias = ['Dragon Ball', 'Naruto', 'Super Campeones', 'One Piece', 'Dragon Ball GT', 'Dragon Ball Super']
  // Y nuevaCategoria = ['Dragon Ball GT', 'Dragon Ball Super']

  // Después de borrar quedará:
  // ['Dragon Ball', 'Naruto', 'Super Campeones', 'One Piece']


  return (
    <>
    
      <h1>Gif App</h1>
      <input type="text" />

      <div className="input-container">
      <button onClick={agregarCategoria}>Agregar</button>
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

