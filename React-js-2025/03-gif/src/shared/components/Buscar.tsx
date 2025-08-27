import {useState, useEffect } from "react";

interface propsBuscar {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const Buscar = ({placeholder = 'Buscar', onQuery}:propsBuscar) => {


  const [query, setQuery] = useState('');

  useEffect(() => {
    onQuery(query);
  }, [query, onQuery]);
  

  const handleSearch = () => {
  onQuery(query);
  setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      {/* <h1>{query}</h1> */}
        <input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} >Buscar</button>
    </div>

  )
}
