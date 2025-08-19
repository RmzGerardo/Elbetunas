let nombre:string = 'Juan';
nombre = 'Pedro';

let edad:number = 30;
edad = 25;

let esEstudiante:boolean = true;

esEstudiante = false;

// varias variables en una sola línea
let ciudad:string = 'Madrid', pais:string = 'España', codigoPostal:number = 28001;
console.log(`Ciudad: ${ciudad}, País: ${pais}, Código Postal: ${codigoPostal}`);


const PI:number = 3.1416;
const NOMBRE_COMPLETO:string = 'Ana García';
const ES_MAYOR_DE_EDAD:boolean = true;

// Las siguientes líneas darían error si las descomentas, porque no puedes reasignar una constante
// PI = 3.14;
// NOMBRE_COMPLETO = 'Luis Pérez';

console.log(`PI: ${PI}, Nombre: ${NOMBRE_COMPLETO}, Mayor de edad: ${ES_MAYOR_DE_EDAD}`);