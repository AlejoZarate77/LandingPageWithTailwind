import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import BackGround from "./components/BackGround";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-800 to-purple-600"></div>
      <div className="flex-1 bg-gray-200"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="w-11/12 h-4/5 bg-transparent relative mt-[-100px]">
          <Nav />
          <SearchBar />
          <MainContent />
          <BackGround />
        </div>
      </div>
    </div>
  );
}

export default App;
