const nombre: string = 'María';
const edad: number = 28;
const ciudad: string = 'Sevilla';

// Concatenación tradicional
const mensaje1 = 'Hola, mi nombre es ' + nombre + ', tengo ' + edad + ' años y vivo en ' + ciudad + '.';

// Usando template string (más legible y flexible)
const mensaje2 = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;

console.log(mensaje1);
console.log(mensaje2);

// También puedes hacer operaciones dentro del template string
console.log(`El año que viene tendré ${edad + 1} años.`);