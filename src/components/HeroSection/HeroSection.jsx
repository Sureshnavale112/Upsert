const HeroSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-blue-50 px-4 md:px-16 py-10 md:py-20">
    {/* Text Section */}
    <div className="p-4 md:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-tight">
        <span className="text-blue-600">Empowering Your Success</span> with
        Comprehensive Online Exams and Certifications.
      </h1>
      <p className="mt-4 text-gray-600 text-sm sm:text-base">
        At UPCERT, we believe in the power of knowledge and innovation to shape a brighter future through reliable and accessible certifications.
      </p>
      <button className="mt-6 border border-blue-500 px-6 py-2 rounded text-blue-500 hover:bg-blue-100 transition duration-300">
        Contact us
      </button>
    </div>

    {/* Image Section */}
    <div className="flex justify-center mt-8 md:mt-0">
      <img
        src="/assets/learnmore/learntop.png"
        alt="Hero"
        className="w-60 sm:w-72 md:w-80 lg:w-96"
      />
    </div>
  </div>
);

export default HeroSection;
