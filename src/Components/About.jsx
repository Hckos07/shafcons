const About = () => (
  <section className="py-32 px-6 bg-gray-50" id="about">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">

      <div className="w-full lg:w-1/2">
        <img
          src="/image1.webp" 
          alt="Power Infrastructure"
          className="rounded-lg w-full object-center mx-auto shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2">
        <p className="text-lg font-semibold text-blue-900 uppercase mb-2">About Us</p>
        <h2 className="text-5xl font-extrabold text-blue-900 mb-2">
          30+ Years Experience <span className="text-gray-900">In Power solutions</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Shafcons Electrical India (P) Ltd, headquartered in historic Agra, India, is long recognized for its engineering excellence and quality workmanship. We specialize in complete power solutions—Diesel/Gasoline Gensets, Transformers, LT-HT Panels, Earthing Electrodes, and related services. Our unwavering commitment ensures premium service quality and client satisfaction.
        </p>
      </div>

    </div>
  </section>
);

export default About;