import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const whyChooseUs = [
    "Be Polite, friendly and courteous",
    "Maintain high standards of professionalism",
    "Be informative and Listen to feedback and perform",
    "Acknowledge concerns",
  ];

  const corePrinciples = [
    "Honesty: To always be truthful, open and candid",
    "Integrity: To do what we commit",
    "Culture: We are open to new opportunities to learn, improve, teach, and add values",
    "Passion: Love to fulfill our commitment. We lead by Example and we take the lead",
  ];

  return (
    <section className="py-24 bg-white text-center px-4 sm:px-6 lg:px-8"id="faq">
      {/* Header */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-blue-500 font-semibold tracking-widest text-sm mb-2 uppercase"
      >
        FAQS
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-gray-900"
      >
        You Should Know
      </motion.h2>

      <motion.div
        className="h-[3px] w-24 bg-blue-500 mx-auto mt-4 mb-12 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto text-left">
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Why Choose Us?
          </h3>
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-3 mb-4 group"
            >
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <p className="text-lg text-gray-700 group-hover:text-black transition">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-blue-500 h-full rounded-full mx-4"></div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Our Core Principles
          </h3>
          {corePrinciples.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-3 mb-4 group"
            >
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <p className="text-lg text-gray-700 group-hover:text-black transition">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;