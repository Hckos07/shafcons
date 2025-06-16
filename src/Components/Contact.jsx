import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,12}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid phone number is required (10–12 digits)";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      setSuccessMessage("");

      try {
        const response = await fetch("http://localhost:5400/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          setErrors({ submit: result.error || "Failed to send message." });
        }
      } catch (error) {
        setErrors({ submit: "Something went wrong. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-6 md:px-12 text-center">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-500 font-semibold tracking-widest text-base sm:text-lg mb-2"
      >
        CONTACT
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto mt-4 mb-10 h-1 w-24 origin-left bg-blue-500"
      ></motion.div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto text-left grid gap-6"
        noValidate
      >
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Your Message *</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {errors.submit && <p className="text-red-500 text-center">{errors.submit}</p>}
        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;