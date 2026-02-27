import { useState } from "react";
import { Producto } from "../types/producto";
import { productoService } from "../services/productoService";

export const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const obtenerTodos = async () => {
    setCargando(true);
    setError(null);

    try {
      const datos = await productoService.obtenerTodos();
      setProductos(datos);
    } catch (err) {
      setError("Error al cargar los productos");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return {
    productos,
    cargando,
    error,
    obtenerTodos,
  };
};
