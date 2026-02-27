import { api } from "./api";
import type { Producto, CrearProductoDTO } from "../types/producto";

export const productoService = {
  async obtenerTodos(): Promise<Producto[]> {
    const { data } = await api.get<Producto[]>("/productos");
    return data;
  },

  async obtenerPorId(id: string): Promise<Producto> {
    const { data } = await api.get<Producto>(`/productos/${id}`);
    return data;
  },

  async crear(dto: CrearProductoDTO): Promise<Producto> {
    const { data } = await api.post<Producto>("/productos", dto);
    return data;
  },

  async actualizar(id: string, dto: CrearProductoDTO): Promise<void> {
    await api.put(`/productos/${id}`, dto);
  },

  async eliminar(id: string): Promise<void> {
    await api.delete(`/productos/${id}`);
  },
};
