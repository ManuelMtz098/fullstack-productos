import { useEffect, useState } from 'react'
import { useProductos } from './hooks/useProductos';
import { ListaProductos } from './components/ListaProductos';
import { FormProducto } from './components/FormProducto';

function App() {

  const {
    productos,
    cargando,
    error,
    obtenerTodos,
    crear,
    eliminar,
  } = useProductos();

  useEffect(() => {
    obtenerTodos();
  }, [])
  

  return (
  <div className="container mt-4">

    <h3 className="mb-3 text-center">Agregar Producto</h3>

    <FormProducto
      cargando={cargando}
      crearProducto={crear}
    />

    {cargando && <div className="text-muted mt-2">Cargando...</div>}
    {error && <div className="alert alert-danger mt-3">{error}</div>}

    <h3 className="mt-3 mb-3">Lista de Productos</h3>

    <ListaProductos
      productos={productos}
      eliminarProducto={eliminar}
    />

  </div>
  )
}

export default App
