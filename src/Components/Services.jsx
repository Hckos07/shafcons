import gallery8 from "../assets/gallery-8.jpg";
import lt from "../assets/lt.jpg";
import electrans from "../assets/elec-trans.jpg";

const services = [
  {
    title: "Electrical Panels",
    image: { lt }, 
  },
  {
    title: "Electrical Transformers",
    image: {electrans},
  },
  {
    title: "Silent Generator",
    image: { gallery8 },
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 text-center py-16 pb-35 px-4" id="services">
      <h4 className="text-lg text-blue-500 font-semibold tracking-widest mb-2">
        SERVICES
      </h4>
      <h2 className="text-5xl font-bold text-gray-800 mb-2">
        What We Cover
      </h2>
      <div className="h-1 w-20 bg-blue-500 mx-auto mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
            <div className="bg-blue-50 py-4">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;