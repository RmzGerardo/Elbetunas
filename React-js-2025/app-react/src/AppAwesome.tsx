import { ItemCounter } from "./carrito/ItemCounter";

interface IteminCart{
  productoNombre: string;
  productoCantidad: number;
}


const itemsInCart: IteminCart[] = [
  { productoNombre: "nintendo", productoCantidad: 5 },
  { productoNombre: "ps5", productoCantidad: 2 },
  { productoNombre: "ps5 pro controler", productoCantidad: 2 },
];

export const AppAwesome = () => {
  return (
    <>
        <h1>Carrito de compras</h1>

      {
        itemsInCart.map(({productoNombre, productoCantidad}) => {
          return (
            <ItemCounter 
              key={productoNombre} 
              nombre={productoNombre} 
              precio={productoCantidad}
            />
          )
        })
      }

      
    </>
  )
}
