using API.Productos.Entities;
using API.Productos.Repositories;
using System.Xml.Linq;

namespace API.Productos.Services
{
    public class ProductoService: IProductoService
    {
        private readonly IProductosRepository _repository;
        public ProductoService(IProductosRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<Producto> ObtenerTodos()
        {
            return _repository.ObtenerTodos();
        }
        public Producto? ObtenerPorId(Guid id)
        {
            return _repository.ObtenerPorId(id);
        }
        public Producto Crear(string nombre, decimal precio)
        {
            if (string.IsNullOrWhiteSpace(nombre))
                throw new ArgumentException("El nombre es requerido");

            if (precio <= 0)
                throw new ArgumentException("El precio no puede ser menor a cero");

            var producto = new Producto { Nombre = nombre, Precio = precio };
            return _repository.Agregar(producto);
        }
        public Producto? Actualizar(Guid id, string nombre, decimal precio)
        {
            if (string.IsNullOrWhiteSpace(nombre))
                throw new ArgumentException("El nombre es requerido");
            if (precio <= 0)
                throw new ArgumentException("El precio no puede ser menor a cero");

            var producto = new Producto { Id = id, Nombre = nombre, Precio = precio };
            return _repository.Actualizar(producto);
        }

        public bool Eliminar(Guid id)
        {
            return _repository.Eliminar(id);
        }
    }
}
