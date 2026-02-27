using API.Productos.Entities;

namespace API.Productos.Repositories
{
    public interface IProductosRepository
    {
        IEnumerable<Producto> ObtenerTodos();
        Producto Agregar(Producto producto);
        Producto? ObtenerPorId(Guid id);
        bool Eliminar(Guid id);
        Producto? Actualizar(Producto producto);
    }
}
