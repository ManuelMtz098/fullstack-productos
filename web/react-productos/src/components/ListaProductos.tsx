import type { Producto } from "../types/producto";

interface Props {
    productos: Producto[];
    eliminarProducto: (id: string) => Promise<void>
}

export const ListaProductos = ({productos, eliminarProducto}:Props) => {
    const handleEliminar = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar este producto?')) return;
    await eliminarProducto(id);
  };

if (productos.length === 0) {
    return <p className="text-muted">No hay productos</p>;
  }

  return (
<table className="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {productos.map(p => (
      <tr key={p.id}>
        <td>{p.nombre}</td>
        <td>${p.precio.toFixed(2)}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleEliminar(p.id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  )
}
