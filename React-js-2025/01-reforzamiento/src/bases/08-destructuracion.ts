// Desestructuración de objetos
const persona = {
  nombre: 'Laura',
  edad: 29,
  ciudad: 'Bilbao',
  esEstudiante: false
};

const { nombre, edad, ciudad, esEstudiante } = persona;
console.log(nombre, edad, ciudad, esEstudiante);

// Desestructuración de arreglos
const colores: string[] = ['rojo', 'verde', 'azul'];
const [primero, segundo, tercero] = colores;
console.log(primero, segundo, tercero);

// Desestructuración en parámetros de función
function mostrarPersona({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
mostrarPersona(persona);

