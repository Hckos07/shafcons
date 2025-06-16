import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import gallery from "../assets/gallery.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery11 from "../assets/gallery-11.jpg";
import gallery12 from "../assets/gallery-12.jpg";
import gallery66 from "../assets/gallery-66.jpg";
import gallery80 from "../assets/gallery-80.jpg";

const productImages = [gallery1, gallery2, gallery3, gallery5, gallery6, gallery7, gallery8, gallery11, gallery12, gallery66, gallery80];

const ProductCarousel = () => {
  return (
    <section
      className="py-35 bg-cover bg-center bg-no-repeat" id="products"
      style={{ backgroundImage: `url(${gallery})` }}
    >
      <div className="text-center mb-10">
        <h4 className="text-lg text-blue-400 font-semibold tracking-widest mb-2">
          PROJECT
        </h4>
        <h2 className="text-5xl font-bold text-white">Products Photo Gallery</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {productImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 shadow-2xl rounded-md">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-72 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;