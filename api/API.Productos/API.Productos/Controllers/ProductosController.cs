using API.Productos.DTOs;
using API.Productos.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Productos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IProductoService _productosService;
        public ProductosController(IProductoService productosService)
        {
            _productosService = productosService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var products = _productosService.ObtenerTodos();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var product = _productosService.ObtenerPorId(id);
            if (product == null) return NotFound();
            return Ok(product);
        }
        [HttpPost]
        public IActionResult Create([FromBody] CrearProductoDTO dto)
        {
            try
            {
                var producto = _productosService.Crear(dto.Nombre, dto.Precio);
                return CreatedAtAction(nameof(GetById), new { id = producto.Id }, producto);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult Actualizar(Guid id, [FromBody] CrearProductoDTO dto)
        {
            try
            {
                var producto = _productosService.Actualizar(id, dto.Nombre, dto.Precio);

                if (producto == null)
                    return NotFound(new { mensaje = "Producto no encontrado." });

                return NoContent();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Eliminar(Guid id)
        {
            var eliminado = _productosService.Eliminar(id);

            if (!eliminado)
                return NotFound(new { mensaje = "Producto no encontrado." });

            return NoContent();
        }
    }
}
