import React from "react";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Color 1 (Azul) */}
      <div className="flex-1 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-800 to-purple-600"></div>

      {/* Color 2 (Gris) */}
      <div className="flex-1 bg-gray-200"></div>

      {/* Div Central Superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Div que engloba título, nav, barra y ambos divs */}
        <div className="w-11/12 h-4/5 bg-transparent relative mt-[-100px]">
          {/* Título en el lado izquierdo superior */}
          <div className="absolute top-4 left-0 bg-transparent">
            <h1 className="text-4xl text-left bg-transparent">
              <span style={{ color: "white" }}>LOREM</span>
              <span style={{ color: "gray" }}>IPSUM</span>
            </h1>
          </div>

          {/* Barra de búsqueda a la altura del título y en el lado derecho */}
          <div className="absolute top-4 right-0 bg-transparent">
            <input
              type="text"
              placeholder="SEARCH"
              style={{
                width: "400px",
                backgroundColor: "transparent",
                color: "blue",
              }}
              className="p-2 pl-8 pr-4 border rounded-lg bg-transparent"
            />
          </div>

          {/* Nav debajo del título y del lado izquierdo */}
          <div className="absolute top-20 left-0 bg-transparent">
            <nav>
              <ul className="flex space-x-4 bg-transparent">
                <li>
                  <a
                    href="#"
                    className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    BOOK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Nuevo div que engloba a los dos divs */}
          <div className="absolute top-32 left-0 w-full flex h-full">
            {/* Primer div debajo del nav */}
            <div className="w-1/2 h-1/2 bg-gradient-to-t from-gray-100 to-gray-50 p-5">
              {/* Contenido del primer div */}
              <div>
                <p className="text-4xl text-left mt-8 mb-2 ml-8 text-stone-500">
                  MAKE AN
                </p>
                <p className="text-4xl text-left mb-8 ml-8 font-bold text-black">
                  APPOINTMENT
                </p>
                <p className="text-sm mt-8 mb-8 ml-8">
                  Lorem Ipsum is simply of the printing and typesetting
                  industry. Lorem Ipsum has
                  <p>
                    been the industry's standard dummy text ever 0s, when an
                    unknown
                  </p>{" "}
                  printer took and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="mt-8 mb-8 ml-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-40 h-10 mr-2">
                  LOREM IPSUM
                </button>
                <button className="bg-white hover:bg-blue-500 hover:text-white border border-blue-500 text-blue-500 font-bold h-12 w-40 h-10">
                  SIT DOLOR
                </button>
              </div>
            </div>

            {/* Segundo div debajo del nav */}
<div className="w-1/2 h-3/4 bg-gradient-to-t from-gray-200 via-gray-200 to-gray-50 to-gray-50 p-5">
  {/* Contenido del segundo div */}
  <div className="flex justify-center items-center max-w-2xl h-full bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-800 to-purple-600">
    <form className="w-full p-4">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl text-center text-white">
          IT'S QUICK & EASY
        </h2>

        {/* Nombre y Apellido en la misma fila */}
        <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <input
              placeholder="NOMBRE:"
              type="text"
              id="nombre"
              name="nombre"
              className="border p-2 w-full text-xs"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <input
              placeholder="APELLIDO:"
              type="text"
              id="apellido"
              name="apellido"
              className="border p-2 w-full text-xs"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            placeholder="CONTACTO:"
            type="text"
            id="contacto"
            name="contacto"
            className="border p-2 w-full text-xs"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="MENSAJE:"
            id="mensaje"
            name="mensaje"
            className="border p-2 w-full text-xs"
          ></textarea>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs w-full"
          >
            Enviar
          </button>
          {/* Agregar el segundo botón */}
          <button className="bg-white border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded text-xs w-full">
            Segundo Botón
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


            {/* Div con imágenes y títulos debajo del segundo div */}
            <div className="absolute top-2/4 flex justify-between space-x-8">
              {/* Primera imagen con título */}
              <div className="w-1/4 bg-transparent p-6 rounded-lg  text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/150/760/non_2x/calendar-icon-sign-symbol-design-free-png.png"
                  alt="Mi Imagen 1"
                  className="w-full h-auto max-h-32"
                />
                <h3 className="text-xs mt-4">CLICK HERE</h3>
              </div>
              {/* Otras imágenes con títulos */}
              <div className="w-1/4 bg-transparent p-6 rounded-lg  text-center">
                <img
                  src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477162-clock_78594.png"
                  alt="Mi Imagen 2"
                  className="w-full h-auto max-h-32"
                />
                <h3 className="text-xs mt-4">CLICK HERE</h3>
              </div>
              <div className="w-1/4 bg-transparent p-6 rounded-lg  text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
