import React from 'react';
import logo from "../assets/logo.png"

const Navigation = () => {
  return (
    <div className="mx-auto max-w-[430px] p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center"><img src={logo} alt="" className="h-10 w-auto" /></div>

        <div>
          <button className="border-2 border-[#0066cc] text-[#0066cc] font-medium py-2 px-6 rounded-full text-sm hover:bg-[#0066cc] hover:text-white transition-colors duration-200">7000+ kolleksiya</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;