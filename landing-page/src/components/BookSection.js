import React, { useState, useEffect } from "react";

function BookSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);

  const products = [
    {
      name: "Flor de Luna",
      description: "Un perfume misterioso y seductor con notas de jazmín y pachulí, perfecto para una noche especial.",
      price: "$19.99",
      image: "https://i.pinimg.com/originals/e4/cd/a9/e4cda95402286dbdee04410ffcea8dd7.png",
    },
    {
      name: "Elegancia Floral",
      description: "Este perfume floral combina la frescura de las flores blancas con toques de rosa, creando una fragancia delicada y sofisticada.",
      price: "$29.99",
      image: "https://blog.perfumeriasunidas.com/hubfs/PORTADA%20FRAGANCIAS.png",
    },
    {
      name: "Aroma Nocturno",
      description: "Un perfume profundo y enigmático con notas de vainilla y ámbar, ideal para las noches de invierno.",
      price: "$39.99",
      image: "https://hips.hearstapps.com/hmg-prod/images/portada-1640603827.jpg",
    },
    {
      name: "Esencia Otoñal",
      description: "Captura la esencia del otoño con este perfume que evoca el aroma de hojas secas y madera.",
      price: "$49.99",
      image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/964af18/2147483647/strip/false/crop/800x450+0+29/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2020%2F10%2Fperfumes-para-otono-2020.jpeg",
    },
    {
      name: "Frescura Marina",
      description: "Sumérgete en una frescura marina con este perfume que combina notas de cítricos y salinidad, perfecto para días soleados.",
      price: "$59.99",
      image: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/04/15596787389720.jpg",
    },
  ];

  useEffect(() => {
    if (products[currentImage]) {
      setCurrentProduct(products[currentImage]);
    }
  }, [currentImage]);

  const prevImage = () => {
    const newIndex = currentImage === 0 ? products.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentImage === products.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-2">
        <img
          src={currentProduct ? currentProduct.image : ""}
          alt={currentProduct ? currentProduct.name : ""}
          className="w-full h-96 object-cover rounded-lg transition transform hover:scale-105"
        />
      </div>
      <div className="w-1/2 p-2">
        <div className="w-56 sm:w-64">
          <div className="bg-white rounded-lg p-4 border border-gray-300">
            <h3 className="text-lg font-bold mb-2">
              {currentProduct ? currentProduct.name : ""}
            </h3>
            <p className="text-sm mb-2">
              {currentProduct ? currentProduct.description : ""}
            </p>
            <h3 className="text-lg font-semibold mb-2">
              {currentProduct ? currentProduct.price : ""}
            </h3>
          </div>
        </div>
        <div className="arrow-buttons">
          <button onClick={prevImage} className="bg-blue-500 text-white rounded-lg p-2 mr-2 hover:bg-blue-700">
            {"<"} Anterior
          </button>
          <button onClick={nextImage} className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700">
            Siguiente {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookSection;
