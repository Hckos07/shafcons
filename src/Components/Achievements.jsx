import { useState } from "react";
import { motion } from "framer-motion";
import certificate1 from "../assets/certificate-1.jpg";
import certificate2 from "../assets/certificate-2.jpeg";

const Appreciations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { title: "Jakson", img: certificate1 },
    { title: "T Power", img: certificate2 },
  ];

  return (
    <section className="py-20 bg-white text-center">
      {/* Header */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-blue-500 tracking-widest font-semibold text-lg mb-2 uppercase"
      >
        Achievements
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-gray-800"
      >
        Our Appreciations
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-12 origin-left"
      />

      {/* Certificates Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-blue-50 rounded-md p-4 w-80 cursor-pointer hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            onClick={() => setSelectedImage(cert.img)}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{cert.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[80vh] rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Appreciations;