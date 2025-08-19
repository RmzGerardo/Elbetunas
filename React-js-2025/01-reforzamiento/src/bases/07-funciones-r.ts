// Función con múltiples retornos usando un objeto
function calcularDatos(a: number, b: number): { suma: number; producto: number } {
  return {
    suma: a + b,
    producto: a * b
  };
}
const resultado = calcularDatos(3, 5);
console.log('Suma:', resultado.suma, 'Producto:', resultado.producto);

// Función con múltiples retornos usando un array (tuple)
function operaciones(a: number, b: number): [number, number] {
  return [a + b, a * b];
}
const [suma, producto] = operaciones(4, 6);
console.log('Suma:', suma, 'Producto:', producto);

// Función flecha con múltiples retornos (objeto)
const calcular = (x: number, y: number) => ({
  suma: x + y,
  resta: x - y,
  multiplicacion: x * y
});
const res = calcular(10, 2);
console.log(res);

// Función flecha con múltiples retornos (tuple)
const operacionesFlecha = (x: number, y: number): [number, number, number] => [x + y, x - y, x * y];
const [sum, rest, mult] = operacionesFlecha(7, 3);
console.log('Suma:', sum, 'Resta:', rest, 'Multiplicación:', mult);