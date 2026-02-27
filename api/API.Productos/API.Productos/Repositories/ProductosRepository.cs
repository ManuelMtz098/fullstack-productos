using API.Productos.Entities;

namespace API.Productos.Repositories
{
    public class ProductosRepository: IProductosRepository
    {
        private readonly List<Producto> _productos;
        public ProductosRepository()
        {
            _productos = new List<Producto>
            {
                new Producto
                {
                    Id = Guid.NewGuid(),
                    Nombre = "Laptop",
                    Precio = 15000
                },
                new Producto
                {
                    Id = Guid.NewGuid(),
                    Nombre = "Mouse",
                    Precio = 350
                }
            };
        }

        public IEnumerable<Producto> ObtenerTodos()
        {
            return _productos;
        }
        public Producto Agregar(Producto producto)
        {
            producto.Id = Guid.NewGuid();
            _productos.Add(producto);
            return producto;
        }
        public Producto? ObtenerPorId(Guid id)
        {
            return _productos.FirstOrDefault(p => p.Id == id);
        }
        public bool Eliminar(Guid id)
        {
            var producto = ObtenerPorId(id);
            if (producto == null) return false;
            _productos.Remove(producto);
            return true;
        }
        public Producto? Actualizar(Producto producto)
        {
            var existente = ObtenerPorId(producto.Id);
            if (existente == null) return null;
            existente.Nombre = producto.Nombre;
            existente.Precio = producto.Precio;
            return existente;
        }
    }
}
