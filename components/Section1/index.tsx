import React from 'react';
import Image from "next/image"
import Head from 'next/head';
import Logo from "../../assets/img/LOGO.png"
import { Agendar } from "../../components/Agendar/index"
import Video from "@/components/BannerVideo"

export const Section1 = () => {
  return (
    <div className="flex items-center justify-center h-screen relative text-white ">
      <Head>
        <title>Mira Hospital Oftalmológico</title>
      </Head>
      <Video />
      <div className="w-[90%] lg:w-7/12 flex flex-col gap-5 items-center py-5 px-3 lg:py-10 lg:px-10 lg:items-center absolute backdrop-blur-[2px] bg-[#00000089] rounded ">
        <Image src={Logo} alt="Sorridents" className="m-auto w-[200px]" />

        
        <div className="flex items-center lg:items-center flex-col gap-10">
          <h1 className="font-sans lg:text-6xl lg:text-left text-5xl font-bold text-center">
            Entre em contato 
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
