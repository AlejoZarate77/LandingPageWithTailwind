import React from "react";

function AboutUsSection() {
  return (
    <section className="h-auto p-8 flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/los-mejores-perfumes-de-oton-o-para-hombre-esquire-1604414321.jpg" // Reemplaza con la ruta de tu imagen
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <p className="text-gray-700 text-lg">
            Inserta aquí tu descripción sobre tu empresa o proyecto. Puedes
            contar la historia, la misión, los valores, etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
