interface propsBuscar {
    placeholder?: string;
}

export const Buscar = ({placeholder}:propsBuscar) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={placeholder}/>
        <button>Buscar</button>
    </div>

  )
}
