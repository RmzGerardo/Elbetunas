// Desestructuración de arreglos
const numeros: number[] = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
console.log('Primeros tres:', primero, segundo, tercero);

// Puedes saltar elementos usando comas vacías
const [, , terceroSolo] = numeros;
console.log('Tercero:', terceroSolo);

// Desestructuración con valores por defecto
const [a, b, c, d, e, f = 100] = numeros;
console.log('Con valor por defecto:', a, b, c, d, e, f);

// Desestructuración en funciones
function mostrarColores([color1, color2]: string[]) {
  console.log(`Color 1: ${color1}, Color 2: ${color2}`);
}
mostrarColores(['amarillo', 'morado']);