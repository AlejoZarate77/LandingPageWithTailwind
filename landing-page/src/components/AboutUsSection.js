import React from "react";
import { useEffect, useState } from "react";
import "../css/AboutUsSection.css";

function AboutUsSection() {
  const sectionStyle = {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agregar una animación de entrada cuando la sección es visible
    setIsVisible(true);
  }, []);

  return (
    <section
      style={sectionStyle}
      className={`p-8 flex flex-col justify-center items-center bg-gray-100 ${
        isVisible ? "animated-section" : ""
      }`}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        Bienvenidos a Nuestra Historia
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/los-mejores-perfumes-de-oton-o-para-hombre-esquire-1604414321.jpg"
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <p className="text-gray-700 text-lg leading-loose">
            En nuestra empresa, creemos en la innovación y la pasión. Nuestra
            historia se teje con la dedicación de un equipo comprometido a
            ofrecer la mejor calidad y servicio a nuestros clientes. Desde
            nuestros humildes comienzos hasta nuestra visión actual, hemos
            mantenido nuestros valores centrales de integridad y excelencia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
