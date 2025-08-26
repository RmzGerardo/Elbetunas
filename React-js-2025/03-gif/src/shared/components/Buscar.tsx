interface propsBuscar {
    placeholder?: string;
}

export const Buscar = ({placeholder = 'Buscar'}:propsBuscar) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={placeholder}/>
        <button>Buscar</button>
    </div>

  )
}
