import React from 'react';
import booksImg from '../assets/books.png';

const ComingBooks = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4 overflow-hidden">
      <div className="relative w-full flex justify-center items-center mb-6">
        <span   className="absolute text-white/20 text-6xl md:text-7xl font-normal whitespace-nowrap select-none pointer-events-none"  style={{ fontFamily: "'Caveat', cursive" }}>Tez kunda</span>
        <h2 className="relative z-10 text-white text-3xl md:text-4xl font-extrabold text-center tracking-wide">Tez kunda</h2>
      </div>
      <div className="w-full max-w-[420px] flex justify-center items-center px-2">
        <img src={booksImg} alt="" className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"/>
      </div>
    </div>
  );
};

export default ComingBooks;