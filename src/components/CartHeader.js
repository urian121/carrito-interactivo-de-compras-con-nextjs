// Componente CartHeader que muestra el encabezado del carrito de compras
export default function CartHeader() {
  return (
    <div className="card-header bg-white border-0 py-4" style={{borderRadius: '12px 12px 0 0'}}>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0 text-center flex-grow-1" style={{fontWeight: '600', fontSize: '1.875rem', color: '#0f172a'}}>
          Lista de Productos
        </h1>
        <i className="bi bi-cart2" style={{fontSize: '1.5rem', color: '#3b82f6'}}></i>
      </div>
    </div>
  );
}