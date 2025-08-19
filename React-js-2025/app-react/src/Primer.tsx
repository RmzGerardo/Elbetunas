import type { CSSProperties } from "react";
import { AppAwesome } from "./AppAwesome"

    const nombre= 'Gerardo';
    const juegosFavoritos = ['Spiderman', 'The Last of Us', 'God of War'];
    const isActive = true;

    const addres = {
        ciudad: 'Madrid',
        pais: 'España',
        cp: 28001
    }

    console.log(juegosFavoritos);


    const miEstilo: CSSProperties = {
        backgroundColor: 'red',
        borderRadius: isActive ? '20px': '0px',
    }

export const Primer = () => {
  return (
    <>
    <p>Tu nombre es: {nombre}</p>
    <p>Mis juegos favoritos son: {juegosFavoritos}</p>
    <p>{juegosFavoritos.join(' , ')}</p>
    <p>{isActive ? 'Verdadero': 'Falso'}</p>
    <p>{JSON.stringify(addres)}</p>

<p style={miEstilo}>
    

  Hola
</p>

    <AppAwesome />
    </>
  )
}
