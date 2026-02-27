import { api } from "./api";
import type { Producto } from "../types/producto";

export const productoService = {
  async obtenerTodos(): Promise<Producto[]> {
    const { data } = await api.get<Producto[]>("/productos");
    return data;
  },
};
