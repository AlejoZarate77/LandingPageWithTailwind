import React, { useEffect, useState } from "react";
import "../css/AboutUsSection.css";

function AboutUsSection() {
  const sectionStyle = {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const images = [
    "https://www.instyle.com/thmb/tKmagi6LkbUratBg4OYt2r60ASA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/022822-spring-perfume-quiz-question-lead-2000-a165ec70588c4a7ca98bb627fa842670.jpg",
    "https://cdn.thomasnet.com/insights-images/embedded-images/65f03090-bc18-42c8-bd5a-1ab6cea99200/02167a88-06e3-47ad-97d2-6ba10b049713/FullHD/perfume-top-suppliers.jpg",
    "https://i.ytimg.com/vi/AMlZjs17A-A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA30NPD1A_JmQFYlgEBkg2OXJ6dKwg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Cambiar la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      style={sectionStyle}
      className={`p-8 flex flex-col justify-center items-center bg-gray-100 ${
        isVisible ? "animated-section" : ""
      }`}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        ABOUT US
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2">
          <div className="w-full h-72 rounded-lg shadow-lg overflow-hidden">
            <a href={images[currentImageIndex]} target="_blank" rel="noopener noreferrer">
              <img
                src={images[currentImageIndex]}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
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
