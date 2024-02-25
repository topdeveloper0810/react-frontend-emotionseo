import React from "react";

// import page parts.
// import Background from "./background";
import PricingCard from "../../../Components/PricingCard";

const Precios = () => {
  return (
    <div className="relative w-[100vw] min-h-[100vh] flex flex-col justify-center items-center p-10  ">
      {/* <div>
        <Background />
      </div> */}
      <div className="absolute z-10 flex flex-row min-h-[100vh] ">
        <div className="flex flex-row gap-12 flex-wrap justify-center items-center">
            <PricingCard/>
           
        </div>
      </div>
    </div>
  );
};

export default Precios;
