import { useState } from "react";
import type { CrearProductoDTO } from "../types/producto";

interface Props {
    cargando: boolean
    crearProducto: (dto: CrearProductoDTO) => Promise<void>;
}

export const FormProducto = ({cargando, crearProducto}:Props) => {
const [nombre, setNombre] = useState<string>('');
  const [precio, setPrecio] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!nombre.trim()) return setError('El nombre es requerido');
    if (isNaN(precio) || precio <= 0) return setError('El precio debe ser un número positivo');

    await crearProducto({ nombre: nombre.trim(), precio });
    setNombre('');
    setPrecio(0)
  };

    return (
    <form className="producto-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="alert alert-warning">{error}</div>}

        <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          id="nombre"
          type="text"
          className="form-control"
          placeholder="Ej. Laptop"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          disabled={cargando}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          id="precio"
          type="number"
          className="form-control"
          placeholder="0.00"
          value={precio}
            onChange={e => setPrecio(Number(e.target.value))}
          disabled={cargando}
        />
        </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={cargando}
      >
        {cargando ? 'Guardando...' : 'Agregar Producto'}
      </button>
    </form>
  )
}
