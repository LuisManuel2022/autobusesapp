import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import car1 from "../imagenes/0.jpg";
import car2 from "../imagenes/1.jpg";
import car3 from "../imagenes/2.jpg";
import car4 from "../imagenes/3.jpg";
import car5 from "../imagenes/4.jpg";
import car6 from "../imagenes/5.jpg";
import car7 from "../imagenes/6.jpg";
import car8 from "../imagenes/7.jpg";
import car9 from "../imagenes/8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./abouts.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Abouts() {
  return (
    <>
      <div className="title-history">
        <h3>Historia de la empresa</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        loop="true"
       
          navigation
        pagination={{
          clickable: true,       
          dynamicBullets: true,
        }}
        className="youSwiper"
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
        <SwiperSlide>
          <img src={car8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car9} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="historia">
        <span>
          Empresa nacida en la segunda década del Siglo XX, en donde en aquellos
          tiempos se prestaba el servicio a Ciudades importantes como: Otumba,
          Apan, Cd. Sahagún, entre otros, así como pueblos y rancherías
          aledañas, siendo nuestro principal destino la Ciudad de Teotihuacan,
          considerado Patrimonio Cultural de la Nación y uno de los principales
          vestigios de mayor riqueza histórica y turística a nivel Nacional e
          Internacional. A través de los años la empresa ha evolucionado con la
          visión de ofrecer un servicio de calidad y seguridad, esto gracias al
          personal 100% comprometido a mejorar día a día la calidad del
          servicio, teniendo como objetivo principal su seguridad y comodidad
          para seguir contando con su preferencia.
        </span>
      </div>
      <div className="mision">
        <h4>Misión y Visión</h4>
        <span>
          Proyectar nuestro servicio de transporte en un creciente compromiso de
          responsabilidad, eficiencia y cortesía, para brindar a nuestros
          pasajeros el trato de calidad que merecen. Ser una empresa líder en el
          transporte con alto grado de desempeño y un servicio que beneficie a
          nuestros usuarios. Ofrecer nuevas rutas para abastecer las necesidades
          de nuestros usuarios y de ésta manera cubrir los trayectos necesarios
          para trasladarse a sus lugares de trabajo, estudio y diversión.
        </span>
      </div>
    </>
  );
}
