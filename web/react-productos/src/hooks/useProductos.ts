import { useState } from "react";
import type { CrearProductoDTO, Producto } from "../types/producto";
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

  const obtenerPorId = async (id: string) => {
    setCargando(true);
    setError(null);

    try {
      const datos = await productoService.obtenerPorId(id);
      return datos;
    } catch (err) {
      setError("Error al cargar el producto");
      console.error(err);
      return null;
    } finally {
      setCargando(false);
    }
  };

  const crear = async (dto: CrearProductoDTO) => {
    setCargando(true);
    setError(null);

    try {
      const nuevoProducto = await productoService.crear(dto);
      setProductos((prev) => [...prev, nuevoProducto]);
    } catch (err) {
      setError("Error al crear el producto");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const actualizar = async (id: string, dto: CrearProductoDTO) => {
    setCargando(true);
    setError(null);

    try {
      await productoService.actualizar(id, dto);
      setProductos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...dto } : p)),
      );
    } catch (err) {
      setError("Error al actualizar el producto");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const eliminar = async (id: string) => {
    setCargando(true);
    setError(null);

    try {
      await productoService.eliminar(id);
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError("Error al eliminar el producto");
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
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
  };
};
