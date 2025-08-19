// Función tradicional
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}
console.log(saludar('Ana'));

// Función anónima asignada a una constante
const sumar = function(a: number, b: number): number {
  return a + b;
};
console.log(sumar(2, 3));

// Función flecha (arrow function)
const multiplicar = (a: number, b: number): number => a * b;
console.log(multiplicar(4, 5));

// Función con parámetros opcionales
function saludarOpcional(nombre: string, saludo?: string): string {
  return `${saludo || 'Hola'}, ${nombre}!`;
}
console.log(saludarOpcional('Luis'));
console.log(saludarOpcional('Luis', 'Buenos días'));

// Función con parámetro por defecto
function elevar(base: number, exponente: number = 2): number {
  return Math.pow(base, exponente);
}
console.log(elevar(3));
console.log(elevar(3, 3));

// Función con retorno void (no retorna nada)
function mostrarMensaje(mensaje: string): void {
  console.log('Mensaje:', mensaje);
}
mostrarMensaje('Esto es un mensaje');

// Función que recibe un objeto como argumento
function imprimirPersona(persona: { nombre: string; edad: number }): void {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
imprimirPersona({ nombre: 'Carlos', edad: 30 });

// Función con rest parameters (parámetros infinitos)
function sumarNumeros(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumarNumeros(1, 2, 3, 4, 5));