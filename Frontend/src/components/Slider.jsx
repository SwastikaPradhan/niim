import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "SMME",
      description: "School of Modern Media and Entertainment",
      image: "https://www.msu.edu.in/frontend_assets/images/banner/SCSE.jpg",
    },
    {
      id: 2,
      title: "SD",
      description: "School of Design",
      image: "https://www.msu.edu.in/frontend_assets/images/banner/SBW.jpg",
    },
    {
      id: 3,
      title: "SAST",
      description: "School of Applied Science and Technology",
      image: "https://www.msu.edu.in/frontend_assets/images/banner/SIKRA.webp",
    },
    {
      id: 4,
      title: "SAST",
      description: "School of Applied Science and Technology",
      image: "https://www.msu.edu.in/frontend_assets/images/banner/SHST.webp",
    },
    {
      id: 5,
      title: "SAST",
      description: "School of Applied Science and Technology",
      image: "https://www.msu.edu.in/frontend_assets/images/banner/SMME.jpg",
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative bg-gray-100 p-6 shadow-lg rounded-lg">
      
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-4"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 text-center"
              style={{ height: "600px" }} 
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[550px] object-cover rounded-lg shadow-md" // Increased image height
              />
              <div className="mt-2">
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="text-sm text-gray-500">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

