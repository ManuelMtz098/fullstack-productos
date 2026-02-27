export interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

export interface CrearProductoDTO {
  nombre: string;
  precio: number;
}