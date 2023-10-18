import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ImageSection from "./ImageSection";

function MainContent() {
  return (
    <div className="absolute top-32 left-0 w-full flex h-full bg-gradient-to-b from-white via-gray-50 to-gray-200">
      <FirstSection />
      <SecondSection />
      <ImageSection />
    </div>
  );
}

export default MainContent;
