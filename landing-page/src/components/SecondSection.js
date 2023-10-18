import React from "react";

function SecondSection() {
  return (
    <div className="w-1/2 h-3/4 p-10">
      <div className="flex justify-center items-center max-w-2xl h-full ml-20 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-800 to-purple-600">
        <form className="w-full h-full p-4 flex flex-col space-y-6">
          <h2 className="text-2xl text-center text-white">IT'S QUICK & EASY</h2>
          {/* Nombre y Apellido en la misma fila */}
          <div className="mb-8 flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2 flex flex-col">
              <input
                placeholder="NOMBRE:"
                type="text"
                id="nombre"
                name="nombre"
                className="border p-2 w-full text-base mb-4"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
              <input
                placeholder="APELLIDO:"
                type="text"
                id="apellido"
                name="apellido"
                className="border p-2 w-full text-base mb-4"
              />
            </div>
          </div>
          <div className="mb-8">
            <input
              placeholder="CONTACTO:"
              type="text"
              id="contacto"
              name="contacto"
              className="border p-2 w-full text-base mb-4"
            />
          </div>
          <div className="mb-8">
            <textarea
              placeholder="MENSAJE:"
              id="mensaje"
              name="mensaje"
              className="border p-2 w-full h-40 text-base mb-4"
            ></textarea>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base w-full"
            >
              SEND
            </button>
            {/* Agregar el segundo botón */}
            <button className="bg-white border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded text-base w-full">
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondSection;
