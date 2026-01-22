'use client';
import { useState } from 'react'; // Importa el hook useState de React
import productosData from '../data/productos.json'; // Importa los datos de productos desde un archivo JSON
import CartHeader from '../components/CartHeader'; // Importa el componente CartHeader
import ProductTable from '../components/ProductTable'; // Importa el componente ProductTable
import CartSummary from '../components/CartSummary'; // Importa el componente CartSummary


export default function Home() {
  const [productos, setProductos] = useState(productosData); // Inicializa el estado con los datos de productos

  /**
   * Actualiza la cantidad de un producto en el carrito
   * @param {number} id - El ID del producto a actualizar
   * @param {number} nuevaCantidad - La nueva cantidad del producto
   */
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setProductos(productos.map(producto => 
      producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
    ));
  };

  /**
   * Elimina un producto del carrito
   * @param {number} id - El ID del producto a eliminar
   */
  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  // Calcula el precio total y la cantidad total de productos en el carrito
  const totalPrecio = productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  // Calcula la cantidad total de productos en el carrito
  const totalProductos = productos.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div className="min-vh-100" style={{backgroundColor: '#e4e2e2', fontFamily: 'var(--font-inter)'}}>
      <div className="container py-5">
        <h1 className="text-center mb-5" style={{fontSize: '2.25rem', fontWeight: '700', color: '#0f172a'}}>
         Carrito Interactivo de Compras con Next.js 🤯
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card border-0" style={{boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', borderRadius: '12px'}}>
            {/* Encabezado del carrito */}
              <CartHeader />
              {/* Tabla de productos */}
              <ProductTable 
                productos={productos}
                actualizarCantidad={actualizarCantidad}
                eliminarProducto={eliminarProducto}
              />
              {/* Resumen del carrito */}
              <CartSummary 
                totalPrecio={totalPrecio}
                totalProductos={totalProductos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
