import React, { useRef, useState } from "react";
import Image from "next/image"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation } from "swiper";

import infra1 from "../../assets/img/cirurgia/sala de cirurgia (1).webp"
import infra2 from "../../assets/img/cirurgia/sala de cirurgia (2).webp"
import infra3 from "../../assets/img/cirurgia/sala de cirurgia (3).webp"
import infra4 from "../../assets/img/cirurgia/sala de cirurgia (4).webp"
import infra5 from "../../assets/img/cirurgia/sala de cirurgia 1.webp"
import infra6 from "../../assets/img/cirurgia/sala de cirurgia 2.webp"
import infra7 from "../../assets/img/cirurgia/sala de cirurgia 3.webp"
import infra8 from "../../assets/img/cirurgia/sala de cirurgia 4.webp"

export default function SliderCirurgia() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-auto rounded-full border-4 animate-neon-pulse"
      >
        <SwiperSlide> <Image src={infra1} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra2} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra3} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra4} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra5} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra6} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra7} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
        <SwiperSlide> <Image src={infra8} alt="imagem infraestrutura mira" className="rounded-full"/> </SwiperSlide>
      </Swiper>
    </>
  );
}
