// INTERFACES
interface Usuario {
  id: number;
  nombre: string;
  rol: Rol; // Usando enum como tipo
  activo: boolean;
}

const usuario1: Usuario = {
  id: 1,
  nombre: 'Sofía',
  rol: Rol.Admin,
  activo: true
};

// ENUMERACIONES
enum Rol {
  Admin = 'ADMIN',
  Usuario = 'USUARIO',
  Invitado = 'INVITADO'
}

console.log(usuario1);
console.log('Rol del usuario:', usuario1.rol);

// Otro ejemplo de enum numérico
enum EstadoPedido {
  Pendiente,
  Enviado,
  Entregado,
  Cancelado
}

const estado: EstadoPedido = EstadoPedido.Enviado;
console.log('Estado del pedido:', EstadoPedido[estado]);