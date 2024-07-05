
import React from "react";
import Slider from "./Slider";
import SideBar from "./Sidebar";


const Banner = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
        <div className="hidden md:col-span-2 md:block md:border-r">
            <SideBar/>
        </div>
        <div className="md:col-span-6">
            <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
