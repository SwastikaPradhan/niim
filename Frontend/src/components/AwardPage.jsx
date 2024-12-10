import React from "react";

const awards = [
  {
    img: "https://www.niilmuniversity.ac.in/web/assets/img/Achieved-2.png", 
    description: "Best Skill Development Programme Initiative of the year - 2023 awarded by Brand Honchos"
  },
  {
    img: "https://www.niilmuniversity.ac.in/web/assets/img/Achieved-5.png", 
    description: "Best Training Partner - STT, 2020-21 awarded by RCPSDC"
  },
  {
    img: "https://www.niilmuniversity.ac.in/web/assets/img/Achieved-6.png", 
    description: "Best Skills University in North East India, 2023 awarded by CEGR"
  }
];

const AwardsPage = () => {
  return (
    <section className="bg-greenTheme text-white py-16">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <img src="/path-to-your-laurel-icon.png" alt="Laurel" className="w-12 h-12" />
          <h1 className="text-5xl font-semibold mx-4">Awards and Recognitions</h1>
          <img src="/path-to-your-laurel-icon.png" alt="Laurel" className="w-12 h-12" />
        </div>
        <p className="text-lg">Empowering Excellence: Where Talents Shine and Achievements Spark Success</p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className="bg-white text-black rounded-lg overflow-hidden max-w-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <img src={award.img} alt={`Award ${index + 1}`} className="w-full h-64 object-cover" />
            <p className="p-6 text-base">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsPage;



