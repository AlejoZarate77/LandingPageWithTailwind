import React from 'react';

const ContactUsSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg p-4 max-w-screen-xl w-full flex">
        <form className="flex-1 bg-white shadow-md rounded p-8">
          <h2 className="text-2xl text-center mb-4">Perfumería Elegante</h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Número de teléfono"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar sesión
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Crear cuenta
            </button>
          </div>
          <div className="text-center">
            <a
              href="#forgot-password"
              className="text-blue-600 hover:underline"
            >
              Olvidé mi contraseña
            </a>
          </div>
        </form>
        <div className="flex-1">
          <img
            src="https://cdn.shopify.com/s/files/1/0451/1085/3787/files/handsome-man-using-perfume-on-black-background_480x480.jpg?v=1643821746"
            alt="Imagen"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
