import React from "react";

function ImageSection() {
  return (
    <div className="absolute top-2/4 flex justify-center space-x-8 pl-8">
      {/* Primera imagen con título */}
      <div className="w-1/4 bg-transparent p-6 rounded-lg text-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/150/760/non_2x/calendar-icon-sign-symbol-design-free-png.png"
          alt="Mi Imagen 1"
          className="w-full h-auto max-h-32"
        />
        <h3 className="text-xs mt-4">CLICK HERE</h3>
      </div>
      {/* Otras imágenes con títulos */}
      <div className="w-1/4 bg-transparent p-6 rounded-lg text-center">
        <img
          src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477162-clock_78594.png"
          alt="Mi Imagen 2"
          className="w-full h-auto max-h-32"
        />
        <h3 className="text-xs mt-4">CLICK HERE</h3>
      </div>
      <div className="w-1/4 bg-transparent p-6 rounded-lg text-center">
        <img
          src="https://images.vexels.com/media/users/3/218910/isolated/preview/ba5249cdecc621a585f000977a1b0f78-icono-de-trazo-de-lista-de-configuraci-n.png"
          alt="Mi Imagen 3"
          className="w-full h-auto max-h-32"
        />
        <h3 className="text-xs mt-4">CLICK HERE</h3>
      </div>
      <div className="w-1/4 bg-transparent p-6 rounded-lg text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Google_Messages_logo.svg/240px-Google_Messages_logo.svg.png"
          alt="Mi Imagen 4"
          className="w-full h-auto max-h-32"
        />
        <h3 className="text-xs mt-4">CLICK HERE</h3>
      </div>
    </div>
  );
}

export default ImageSection;
