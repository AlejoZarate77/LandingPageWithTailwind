import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Div principal azul (parte superior) */}
      <div className="bg-blue-500 flex-1 text-white py-16">
        <h1 className="text-4xl font-bold text-center">
          Bienvenido a Nuestra Landing Page
        </h1>

        {/* Barra de búsqueda y lista (lado izquierdo y derecho) */}

        <div className="bg-blue-500 py-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8">
            {/* Lista no ordenada (ul) en el lado izquierdo */}
            <nav className="mb-4 lg:mb-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Acerca de</a>
                </li>
                <li>
                  <a href="#">Servicios</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </nav>

            {/* Barra de búsqueda en el lado derecho */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full lg:w-48 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Div principal gris (parte inferior) */}
      <div className="bg-gray-200 flex-1 py-16">
        {/* Div en medio con ancho y altura específicos */}
        <div className="bg-gray-100 lg:w-3/4 mx-auto my-8 p-4 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Título del Contenido</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla euismod lectus.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
              Botón 1
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Botón 2
            </button>
          </div>

          {/* FORMULARIO DE CONTACTO */}
          <div className="bg-gray-100 p-4 lg:p-8 rounded-lg shadow-md lg:relative lg:right-[-400px] lg:top-[-90px] lg:w-64">
  <h2 className="text-lg lg:text-base font-semibold mb-2 lg:mb-1">
    Formulario de Contacto
  </h2>
  <form className="mt-8">
    <h3 className="text-lg font-semibold mb-2">Formulario de Contacto</h3>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full lg:w-48 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Apellido"
        className="w-full lg:w-48 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Contacto"
        className="w-full lg:w-48 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <textarea
        placeholder="Mensaje"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Enviar
    </button>
  </form>
</div>
          {/* Contenido de la parte inferior */}
        </div>
      </div>
    </div>
  );
}

export default App;
