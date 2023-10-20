import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Ajusta las clases para aumentar el ancho y la altura del contenedor */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto w-full h-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 md:pr-4">
            <img
              src="tu_imagen_grande.jpg"
              alt="Imagen de About Us"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-4 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Acerca de Nosotros</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lacinia justo et justo fringilla, id aliquam dui fermentum. Sed non
              tristique orci. Nulla facilisi. Cras eu facilisis metus, vel
              venenatis nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
