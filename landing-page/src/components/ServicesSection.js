import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const productData = [
  {
    name: "Heartache",
    description: "Una fragancia encantadora para ocasiones especiales.",
    price: "$50.00",
    imageUrl: "https://www.allyours.com/cdn/shop/files/Cape-Heartache_Imaginary-Authors.png?v=1693394161&width=1100",
  },
  {
    name: "Ekos",
    description: "Un aroma fresco y duradero que te hará sentir especial.",
    price: "$45.00",
    imageUrl: "https://www.naturabrasil.fr/product/image/medium/50316910_ekos_alma.png",
  },
  {
    name: "Unique'e",
    description: "Una fragancia única que te acompañará todo el día.",
    price: "$55.00",
    imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/a1ad7e466dc92ab3a02769beb6781eca3d34e03070059e5705a7e4f867629fd174448.png",
  },
  {
    name: "Acqua de Gio",
    description: "Un aroma suave y elegante para cualquier ocasión.",
    price: "$48.00",
    imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/41b0c9f348dba6b936eff76b80e3cf669fd29e4da74fe03865a8ee3d5243aaba74448.png",
  },
];

function ServicesSection() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "TuFuentePersonalizada", marginBottom: "1.5rem" }}>
          Explora Nuestra Colección Exclusiva de Fragancias
        </h1>
        <p className="text-xl text-justify" style={{ fontFamily: "TuFuentePersonalizada" }}>
          Descubre nuestra selección de fragancias únicas y cautivadoras. Encuentra el aroma perfecto para cada ocasión y sumérgete en el mundo de las esencias irresistibles. ¡Encuentra tu firma olfativa en nuestra perfumería de alta calidad!
        </p>
      </div>
      <div className="flex space-x-4">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-8 max-w-xs relative hover:border border-black rounded-lg transition-transform transform hover:scale-105 hover:border transition-border duration-300"
          >
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
            <h1 className="text-lg font-bold mt-2 mb-2 text-sm">
              {product.name}
            </h1>
            <p className="text-sm mb-2">
              {product.description}
            </p>
            <h3 className="text-lg font-semibold mb-2">
              {product.price}
            </h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              COMPRAR
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-lg">Síguenos en redes sociales:</p>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#1877F2" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#E4405F" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color="#1DA1F2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
