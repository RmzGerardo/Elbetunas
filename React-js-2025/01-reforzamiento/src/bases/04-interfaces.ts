// Definición de una interfaz
interface Persona {
  nombre: string;
  edad: number;
  ciudad: string;
  esEstudiante: boolean;
}

// Uso de la interfaz para tipar un objeto
const persona: Persona = {
  nombre: 'Carlos',
  edad: 35,
  ciudad: 'Barcelona',
  esEstudiante: false
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);
console.log(`¿Es estudiante?: ${persona.esEstudiante ? 'Sí' : 'No'}`);