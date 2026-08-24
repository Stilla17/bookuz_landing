import { useState, useEffect } from "react";

import book1 from "../assets/dik.png";
import book2 from "../assets/7001.png";
import book3 from "../assets/idk.png";

const HeroBanner = () => {
  const books = [
    { id: 1, img: book1, title: "Stiven King" },
    { id: 2, img: book2, title: "Atrof to'la" },
    { id: 3, img: book3, title: "Farovonlikka" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [books.length]);

  const getPositionClass = (index) => {
    const total = books.length;
    const isCenter = index === currentIndex;
    const isLeft = index === (currentIndex - 1 + total) % total;
    const isRight = index === (currentIndex + 1) % total;

    if (isCenter) {
      return "z-20 scale-125 translate-x-0 opacity-100";
    }
    if (isLeft) {
      return "z-10 scale-90 -translate-x-[120px] opacity-90";
    }
    if (isRight) {
      return "z-10 scale-90 translate-x-[120px] opacity-90";
    }
    return "opacity-0 pointer-events-none";
  };

  return (
    <div className="w-full flex flex-col items-center pt-2 px-4 overflow-hidden pt-[50px]">
      <div className="relative w-full flex justify-center items-center mb-6">
        <span
          className="absolute text-white/30 text-5xl md:text-6xl font-normal whitespace-nowrap select-none pointer-events-none"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {" "}
          Yangi to'plam
        </span>
        <h1 className="relative z-10 text-white text-3xl font-extrabold text-center tracking-wide">
          Yangi to'plam
        </h1>
      </div>
      <div className="relative w-full h-[240px] flex items-center justify-center">
        {books.map((book, index) => (
          <div
            key={book.id}
            className={`absolute transition-all duration-700 ease-in-out flex justify-center items-center ${getPositionClass(index)}`}
          >
            {" "}
            <img
              src={book.img}
              alt={book.title}
              className="w-[150px] h-[210px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            />
          </div>
        ))}
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwOWj1Oe9TZyKuy530iSoWmVF8Yej1TcicfEv3xYOjjeamWg/viewform?usp=dialog" className="w-full">
        <button className="w-full mt-4 bg-[#0066cc] text-white text-xl font-bold py-3.5 rounded-xl border border-blue-400/30 shadow-lg active:scale-95 transition-transform duration-150">
          {" "}
          Harid qilish
        </button>
      </a>
    </div>
  );
};

export default HeroBanner;
