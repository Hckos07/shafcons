import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Use direct paths since these are in `public/`
const galleryBackground = "/gallery.jpg";
const productImages = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
  "/gallery-8.jpg",
  "/gallery-11.jpg",
  "/gallery-12.jpg",
  "/gallery-66.jpg",
  "/gallery-80.jpg",
];

const ProductCarousel = () => {
  return (
    <section
      className="py-35 bg-cover bg-center bg-no-repeat"
      id="products"
      style={{ backgroundImage: `url(${galleryBackground})` }}
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