import React from 'react';
import Image from "next/image"
import Logo from "../../assets/img/LOGO.png"
import { Agendar } from "../../components/Agendar/index"
import Olhos from "../BannerVideo/index"

export const Section1 = () => {
  return (
    <div className="flex items-center justify-center bg-section-1 h-full text-white">
      <div className="w-12/12 lg:w-7/12 flex flex-col gap-5 items-center lg:items-center">
        <Image src={Logo} alt="Sorridents" className="m-auto" />        
        <div className="flex items-center lg:items-center flex-col gap-10">
          <h1 className="font-sans lg:text-6xl lg:text-left text-5xl font-bold text-center">
            Entre em contato conosco
          </h1>
          <p className="font-semibold lg:text-2xl text-center lg:text-left">
            Cuide da Saúde dos seus Olhos, tire suas dúvidas e agende uma consulta agora.
          </p>
          <Agendar/>
        </div>
      </div>
    </div>
  )
}
