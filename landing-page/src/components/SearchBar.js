import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="absolute top-4 right-0 bg-transparent">
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="SEARCH"
            style={{
              width: "400px",
              backgroundColor: "transparent",
              color: "blue",
              paddingRight: "30px", // Añadir espacio para el icono a la derecha
            }}
            className="p-2 pl-4 border rounded-lg bg-transparent"
          />
          <i
            className="fa fa-search absolute right-3 top-3"
            style={{ color: "lightgray" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
