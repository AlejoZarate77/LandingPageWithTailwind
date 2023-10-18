import React from "react";

function Nav() {
  return (
    <div className="absolute top-20 left-0 bg-transparent">
      <nav>
        <ul className="flex space-x-4 bg-transparent">
          <li>
            <a
              href="#"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              BOOK
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-50 hover:text-blue-500 hover:underline bg-transparent"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
