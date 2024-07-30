import React from "react";
import img1 from "./../../assets/imags/port1.png";
import img2 from "./../../assets/imags/port2.png";
import img3 from "./../../assets/imags/port3.png";

export default function Portfolio() {
  return (
    <>
    <div className="  text-center text-black p-5 ">
      <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>


      <div className="flex gap-4 justify-center  items-center">
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
                    <i className="fa-solid fa-star text-lg"></i>
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
                </div>

      <div className="grid cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4">
        <div className="relative overflow-hidden">
          <img src={img1} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>       
        </div>
        <div className="relative overflow-hidden">
          <img src={img2} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
                    
        </div>

        <div className="relative overflow-hidden">
          <img src={img3} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
                    
        </div>

        <div className="relative overflow-hidden">
          <img src={img1} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
                    
        </div>

        <div className="relative overflow-hidden">
          <img src={img2} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
                    
        </div>
        <div className="relative overflow-hidden">
          <img src={img3} alt="" className="rounded-lg" />
          <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
                    
        </div>
      </div>
    </div>
    {/* <div className="lightbox-container  flex justify-center items-center top-0 bottom-0 end-0 start-0 fixed">
      <div className="lightbox-item">

      </div>
    </div> */}
    </>
  );
}
