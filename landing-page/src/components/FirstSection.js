import React from "react";

function FirstSection() {
  return (
    <div className="w-1/2 h-1/2 p-5">
      <div>
        <p className="text-4xl text-left mt-8 mb-2 ml-8 text-stone-500">
          MAKE AN
        </p>
        <p className="text-4xl text-left mb-8 ml-8 font-bold text-black">
          APPOINTMENT
        </p>
        <p className="text-sm mt-8 mb-8 ml-8">
          Lorem Ipsum is simply of the printing and typesetting industry. Lorem
          Ipsum has
          <p>
            been the industry's standard dummy text ever 0s, when an unknown
          </p>
          printer took and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="mt-8 mb-8 ml-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-40 h-10 mr-2">
          LOREM IPSUM
        </button>
        <button className="bg-white hover:bg-blue-500 hover:text-white border border-blue-500 text-blue-500 font-bold h-12 w-40 h-10">
          SIT DOLOR
        </button>
      </div>
    </div>
  );
}

export default FirstSection;
