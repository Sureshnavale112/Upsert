import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const logos = [
  "public/assets/learnmore/Clientsa.png",
  "public/assets/learnmore/Clientsb.png",
  "public/assets/learnmore/Clientsc.png",
  "public/assets/learnmore/Clientsd.png",
  "public/assets/learnmore/Clientse.png",
  "public/assets/learnmore/Clientsd.png"
];

const ClientLogos = () => (
  <section className="py-10 text-center">
    <h2 className="text-xl font-semibold">Trusted by over 768+ Clients.</h2>
    <p className="text-gray-600 mb-6">
      Our Clients are our top priority, we are committed to <br /> 
      providing them with the highest level of service
    </p>



    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="w-full max-w-6xl mx-auto"
    >
      {logos.map((logo, i) => (
        <SwiperSlide key={i} className="flex justify-center">
          <img
            src={logo}
            alt={`client-logo-${i}`}
            className="w-32 h-32 object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ClientLogos;
