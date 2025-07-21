import { useState } from "react"

// * Al comunicarse entre componentes se debe pasar la prop del componente padre en la funcion del hijo
// * Asi como en el ejemplo, y debemos usar una callback en la funcion de retorno de la setcategorias.
// * esto hara que pasemos el arreglo del padre al hijo




export const AddCategory = ({onNewCategory}) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInput = (event) => {
    setInputValue(event.target.value);

  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    
    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return (
   
      <form onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInput} />
      </form>   

    
  )
}
