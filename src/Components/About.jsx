
import image from '../assets/image1.webp'; 

const About = () => (
  <section className="py-32 px-6 bg-gray-50 " id="about">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">

      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src= {image}
          alt="Power Infrastructure"
          className="rounded-lg w-full object-center mx-auto shadow-lg "
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2">
        <p className="text-lg font-semibold text-blue-900 uppercase mb-2">About Us</p>
        <h2 className="text-5xl font-extrabold text-blue-900 mb-2">
          30+ Years Experience <span className="text-gray-900">In Power solutions</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Shafcons Electrical India (P) Ltd Head Office in Historic Agra, India, the Shafcons Electrical India (P) Ltd. is long been recognized for the competence of its engineering and the quality of its works, and the company has thrived in a rapidly changing industrial marketplace. The company has been established to provide complete power solutions (Diesel/Gasoline Genset, Transformers, LT-HT Panels, Earthing Electrodes, and Services). Our commitment to providing the very best services to ensure the highest quality of output for our clients remains our standard.
        </p>
      </div>

    </div>
  </section>
);

export default About;