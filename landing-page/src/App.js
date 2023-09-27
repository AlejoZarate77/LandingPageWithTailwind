import './App.css';

function App() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-semibold">TODO PERFUMERIA</h1>
      </header>
      <section className="bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Descubre nuestro producto increíble</h2>
        <p className="text-gray-600">Te ofrecemos una solución innovadora para tus necesidades.</p>
        <a href="#contacto" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600">¡Contáctanos!</a>
      </section>
      <section className="bg-gray-200 p-8">
        <h2 className="text-2xl font-semibold">Características destacadas</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
      </section>
      <section id="contacto" className="bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p className="text-gray-600">¡Estamos aquí para ayudarte! Contáctanos:</p>
        <form className="mt-4">
          <label htmlFor="nombre" className="block text-gray-800 font-semibold mb-2">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 mt-4">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
          <textarea id="mensaje" name="mensaje" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mt-4" placeholder="Escribe tu mensaje aquí..." required></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600">Enviar</button>
        </form>
      </section>
      <footer className="bg-blue-500 text-white text-center py-4">
        <p className="text-sm">&copy; 2023 Tu Landing Page</p>
      </footer>
    </div>
  );
}

export default App;
