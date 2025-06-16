import { motion } from "framer-motion";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

const OurClients = () => {
  return (
    <section className="py-20 bg-white" id="clients">
      {/* Header */}
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

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Client 1 - Left */}
        <motion.div
          className="flex items-center justify-start gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={team1}
            alt="Indian Oil"
            className="w-64 h-64 rounded-full border-4 border-dashed border-gray-300 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="bg-blue-50 p-8 rounded-lg w-[400px] shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Indian Oil</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Indian Oil Corporation Limited is an Indian government-owned oil and gas explorer and producer, headquartered in New Delhi
            </p>
          </div>
        </motion.div>

        {/* Client 2 - Right */}
        <motion.div
          className="flex items-center justify-end gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-50 p-8 rounded-lg w-[400px] shadow-md text-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">State Bank of India</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              State Bank of India is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai, Maharashtra
            </p>
          </div>
          <motion.img
            src={team2}
            alt="SBI"
            className="w-64 h-64 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Client 3 - Left */}
        <motion.div
          className="flex items-center justify-start gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={team3}
            alt="Bata"
            className="w-64 h-64 rounded-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="bg-blue-50 p-8 rounded-lg w-[400px] shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Bata Shoes</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              The Bata Corporation is a multinational footwear, apparel and fashion accessories manufacturer and retailer of Moravian origin, headquartered in Lausanne, Switzerland.
            </p>
          </div>
        </motion.div>

        {/* Client 4 - Right */}
        <motion.div
          className="flex items-center justify-end gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-50 p-8 rounded-lg w-[400px] shadow-md text-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Bharat Petroleum</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Bharat Petroleum Corporation Limited is an Indian government-owned oil and gas explorer and producer, headquartered in Mumbai. It operates three refineries in Bina, Kochi and Mumbai.
            </p>
          </div>
          <motion.img
            src={team4}
            alt="Bharat Petroleum"
            className="w-64 h-64 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;