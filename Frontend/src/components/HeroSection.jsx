export default function HeroSection() {
  return (
    <div className="space-y-16 bg-gray-100 p-8">
     
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            We are New Age & Industry-Led!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            <span className="font-semibold text-gray-800">
              Medhavi Skills University
            </span>{" "}
            is India's first Skills University to offer Industrial Immersive
            degree programmes within the holistic development framework of
            NEP2020. Our{" "}
            <span className="font-semibold">
              outcome-focused skill-integrated model
            </span>{" "}
            of higher education is backed by leading industry and sectoral
            partners in India and worldwide.
          </p>
          <button className="text-blue-500 underline">WHO WE ARE →</button>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4 md:mr-8">
          <h1 className="text-3xl md:text-5xl font-bold">
          A Multifaceted Learning Environment Beneath the Natural World!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Our campus is a thriving community that embraces variety and cultivates a melting pot of students from all countries. It is more than simply a place to learn; it is a place where education meets the beauty of nature. At NIILM, we think it's important to create the perfect atmosphere for developing potential, particularly in the fields of art and culture. A doorway to a world of opportunities, NIILM School of Vocational Education is more than just an establishment. Come along with us on this educational, exploratory, and personal development trip on a campus that is as beautiful as it is intellectually stimulating. Welcome to a world where aspirations come true and brilliance meets education.
          </p>
          <button className="text-blue-500 underline">LEARN MORE →</button>
        </div>
      </div>
    </div>
  );
}
