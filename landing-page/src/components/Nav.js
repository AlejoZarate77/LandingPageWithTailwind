import React from "react";
import { Link } from "react-router-dom"; // Importa Link

function Nav() {
  return (
    <div className="absolute top-20 left-0 bg-transparent">
      <nav>
        <ul className="flex space-x-4 bg-transparent">
          <li>
            <Link
              to="/"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              BOOK
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
