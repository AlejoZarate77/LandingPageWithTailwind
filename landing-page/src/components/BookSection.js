import React from "react";

function BookSection() {
  return (
    <div>
      <h2>Nuestros Servicios</h2>
      <div className="productos-servicios">
        {/* Muestra tus 5 productos de servicios aquí */}
        <div className="producto">Producto 1</div>
        <div className="producto">Producto 2</div>
        <div className="producto">Producto 3</div>
        <div className="producto">Producto 4</div>
        <div className="producto">Producto 5</div>
      </div>
    </div>
  );
}

export default BookSection;
