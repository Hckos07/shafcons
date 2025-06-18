import { motion } from "framer-motion";

const OurClients = () => {


  const clients = [
    {
      name: "Indian Oil",
      image: "/team-1.jpg",
      description:
        "Indian Oil Corporation Limited is an Indian government-owned oil and gas explorer and producer, headquartered in New Delhi",
      direction: "left",
    },
    {
      name: "State Bank of India",
      image: "/team-2.jpg",
      description:
        "State Bank of India is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai, Maharashtra",
      direction: "right",
    },
    {
      name: "Bata Shoes",
      image: "/team-3.jpg",
      description:
        "The Bata Corporation is a multinational footwear, apparel and fashion accessories manufacturer and retailer of Moravian origin, headquartered in Lausanne, Switzerland.",
      direction: "left",
    },
    {
      name: "Bharat Petroleum",
      image: "/team-4.jpg",
      description:
        "Bharat Petroleum Corporation Limited is an Indian government-owned oil and gas explorer and producer, headquartered in Mumbai. It operates three refineries in Bina, Kochi and Mumbai.",
      direction: "right",
    },
  ];

  return (
    <section className="py-20 bg-white" id="clients">
      <div className="text-center mb-14">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-blue-400 font-semibold tracking-widest mb-2"
        >
          TEAM
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-800"
        >
          Our Clients
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-1 w-20 bg-blue-500 mx-auto mt-4 origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {clients.map((client, index) => {
          const isRight = client.direction === "right";

          return (
            <motion.div
              key={index}
              className={`flex items-center gap-4 ${isRight ? "justify-end" : "justify-start"
                }`}
              initial={{ opacity: 0, x: isRight ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!isRight && (
                <motion.img
                  src={client.image}
                  alt={client.name}
                  className="w-64 h-64 rounded-full border-4 border-dashed border-gray-300 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div
                className={`bg-blue-50 p-8 rounded-lg w-[400px] shadow-md ${isRight ? "text-right" : ""
                  }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {client.name}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {client.description}
                </p>
              </div>
              {isRight && (
                <motion.img
                  src={client.image}
                  alt={client.name}
                  className="w-64 h-64 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurClients;