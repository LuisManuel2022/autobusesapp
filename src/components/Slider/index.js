import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import car1 from "../imagenes/CONTADOR PRIVADO.jpg";
import car2 from "../imagenes/MEXPUE.jpg";
import car3 from "../imagenes/PUEMEX.jpg";
import car4 from "../imagenes/SOLICITAN.jpg";
import car5 from "../imagenes/Apan.jpg";
import car6 from "../imagenes/PUBLICACION.png";
import car7 from "../imagenes/PUBLICACION 3.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Navigation, EffectCube, Pagination } from "swiper";

export default function Slide() {
  return (
    <>
    <div className="title-front">
      <h4>¡ Nosotros te llevamos !</h4>
    </div>
      <Swiper
       modules={[Navigation, Pagination, EffectCube]}
       effect={"cube"}
       grabCursor={true}
       cubeEffect={{
         shadow: true,
         slideShadows: true,
         shadowOffset: 20,
         shadowScale: 0.94,
       }}
       loop="true"
       autoplay="true"       
       pagination={{ 
        effect: "cube",
         clickable: true, 
         dynamicBullets: true,
       }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={car1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car7} alt="" />
        </SwiperSlide>
      </Swiper>
      
      <div className="title-bottom">
      <h4>¡ Gracias por tu preferencia !</h4>
    </div>
    </>
  );
}
