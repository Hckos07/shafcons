import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";

const testimonials = [
  {
    text: "We are with shafcons for Jakson Cummins (Diesel/Gasoline)",
    client: "Indian Army",
    image: testimonial1,
  },
  {
    text: "We are with shafcons for HT-LT Panels and Earthing Electrodes.",
    client: "Romsons",
    image: testimonial2,
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 bg-white text-center"id="testimonials">
      <h4 className="text-blue-500 font-semibold tracking-widest text-lg mb-2">
        TESTIMONIAL
      </h4>
      <h2 className="text-5xl font-bold text-gray-800">Our Clients Say</h2>
      <div className="relative mx-auto mt-4 mb-10 h-1 w-24 bg-blue-500">
        <div className="hidden md:block w-[2px] bg-blue-500 h-full rounded-full mx-4"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          ref={prevRef}
          className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-transform hover:scale-110 shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-transform hover:scale-110 shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={40}
        slidesPerView={1}
        loop
        className="mt-6"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md transition-all duration-300">
              <img
                src={item.image}
                alt={item.client}
                className="w-20 h-20 rounded-full object-cover mb-6 "
              />
              <p className="text-lg text-gray-600 mb-4 italic leading-relaxed">
                “{item.text}”
              </p>
              <h3 className="text-2xl font-bold text-gray-900">{item.client}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;