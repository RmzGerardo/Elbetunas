// Declaración de un arreglo de strings
const frutas: string[] = ['Manzana', 'Banana', 'Naranja'];

const numeros: number[] = [1, 2, 3, 4, 5, 6];


// Acceso a elementos
console.log(frutas[0]); // Manzana

// Métodos comunes
frutas.push('Pera'); // Agrega un elemento al final
console.log(frutas);

const ultimaFruta = frutas.pop(); // Elimina el último elemento y lo retorna
console.log(ultimaFruta, frutas);

const primerasDos = numeros.slice(0, 2); // Retorna una copia con los dos primeros elementos
console.log(primerasDos);

const numerosDobles = numeros.map(num => num * 2); // Crea un nuevo arreglo con los números al doble
console.log(numerosDobles);

const mayoresADos = numeros.filter(num => num > 2); // Filtra los números mayores a 2
console.log(mayoresADos);





// push: agrega un elemento al final
numeros.push(7);
console.log('push:', numeros);

// pop: elimina el último elemento
const ultimo = numeros.pop();
console.log('pop:', ultimo, numeros);

// map: crea un nuevo arreglo con los resultados de la función
const dobles = numeros.map(n => n * 2);
console.log('map:', dobles);

// filter: filtra los elementos según la condición
const mayoresA3 = numeros.filter(n => n > 3);
console.log('filter:', mayoresA3);

// find: busca el primer elemento que cumpla la condición
const encontrado = numeros.find(n => n === 4);
console.log('find:', encontrado);

// some: verifica si al menos uno cumple la condición
const hayPares = numeros.some(n => n % 2 === 0);
console.log('some:', hayPares);

// every: verifica si todos cumplen la condición
const todosMayoresA0 = numeros.every(n => n > 0);
console.log('every:', todosMayoresA0);

// reduce: reduce el arreglo a un solo valor
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log('reduce:', suma);

// includes: verifica si existe un elemento
const tieneCinco = numeros.includes(5);
console.log('includes:', tieneCinco);

// indexOf: obtiene el índice de un elemento
const indiceTres = numeros.indexOf(3);
console.log('indexOf:', indiceTres);

// slice: obtiene una copia parcial del arreglo
const primerosTres = numeros.slice(0, 3);
console.log('slice:', primerosTres);