using API.Productos.Entities;

namespace API.Productos.Services
{
    public interface IProductoService
    {
        IEnumerable<Producto> ObtenerTodos();
        Producto? ObtenerPorId(Guid id);
        Producto Crear(string nombre, decimal precio);
        Producto? Actualizar(Guid id, string nombre, decimal precio);
        bool Eliminar(Guid id);
    }
}
