import React from "react";

function App() {
  return (
  <div className="h-screen flex flex-col">
    {/* Color 1 (Azul) */}
    <div className="flex-1 bg-gradient-to-tr from-cyan-400 via-blue-200 to-blue-800 to-purple-600"></div>

    {/* Color 2 (Gris) */}
    <div className="flex-1 bg-gray-200"></div>

    {/* Div Central Superpuesto */}
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      {/* Div que engloba título, nav, barra y ambos divs */}
      <div className="w-11/12 h-4/5 bg-transparent relative mt-[-100px]">
        {/* Título en el lado izquierdo superior */}
        <div className="absolute top-4 left-0 bg-transparent">
          <h1 className="text-4xl text-left bg-transparent">
            <span style={{ color: "black" }}>LOREM</span>
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
                    className="text-gray-700 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    BOOK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-500 hover:underline bg-transparent"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-500 hover:underline bg-transparent"
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
            <div className="w-1/2 h-1/2 bg-gray-50 p-5">
              {/* Contenido del primer div */}
              <div>
                <h2 className="text-2xl text-left mt-4">MAKE AN APPOINTMENT</h2>
                <p className="text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Botón 1
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Botón 2
                </button>
              </div>
              {/* Contenedor de imágenes debajo de los botones */}
              <div className="mt-4 flex justify-between">
                {/* Imagen 1 */}
                <div className="text-center">
                  <img
                    src="ruta_imagen_1.jpg"
                    alt="Descripción de la imagen 1"
                    className="max-h-10"
                  />
                  <p>Descripción 1</p>
                </div>
                {/* Imagen 2 */}
                <div className="text-center">
                  <img
                    src="ruta_imagen_2.jpg"
                    alt="Descripción de la imagen 2"
                    className="max-h-10"
                  />
                  <p>Descripción 2</p>
                </div>
                {/* Imagen 3 */}
                <div className="text-center">
                  <img
                    src="ruta_imagen_3.jpg"
                    alt="Descripción de la imagen 3"
                    className="max-h-10"
                  />
                  <p>Descripción 3</p>
                </div>
                {/* Imagen 4 */}
                <div className="text-center">
                  <img
                    src="ruta_imagen_4.jpg"
                    alt="Descripción de la imagen 4"
                    className="max-h-10"
                  />
                  <p>Descripción 4</p>
                </div>
              </div>
            </div>

            {/* Segundo div debajo del nav */}
            <div className="w-1/2 h-1/2 bg-gray-50">
              {/* Contenido del segundo div */}
              <h2 className="text-2xl text-center mt-4">IT'S QUICK & EASY</h2>
              <div className="flex justify-center items-center h-full bg-gradient-to-tr from-cyan-400 via-blue-200 to-blue-800 to-purple-600">
                <form>
                  <h2 className="text-2xl text-">IT'S QUICK & EASY</h2>
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" />
                  <br />

                  <label htmlFor="apellido">Apellido:</label>
                  <input type="text" id="apellido" name="apellido" />
                  <br />

                  <label htmlFor="contacto">Contacto:</label>
                  <input type="text" id="contacto" name="contacto" />
                  <br />

                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="mensaje" />
                  <br />

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
