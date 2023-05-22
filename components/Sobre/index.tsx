import React from "react";
import Image from "next/image";
import icon4 from "../../assets/img/porfissional.png";
import icon2 from "../../assets/img/preço.png";
import icon3 from "../../assets/img/serviço.png";
import icon1 from "../../assets/img/atendimento.png";
import Oftalmo from "../../assets/img/Oftalmo.png";


export const Sobre = () => {
 
  return (
    <div className="bg-white flex flex-col items-center xl:pt-10 xl:items-end xl:flex-row xl:justify-between lg:ps-40">
      <div className="flex flex-1 py-20 flex-col gap-10 items-start justify-start w-full xl:w-6/12">
        <h1 className="font-sans color-three font-bold text-3xl lg:text-5xl text-start">
            Um novo conceito de atendimento oftamológico
        </h1>
        <p className="text-base lg:text-2xl">
        Proporcionamos atendimento oftalmológico com
        </p>
        <div className="flex flex-col gap-10 lg:gap-10 lg:flex-row lg:justify-between w-10/12 text-center">
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4 ">
            <Image src={icon1} alt="" width={50} />
            <h1 className="text-xl color-three font-bold ">Atendimento Humanizado</h1>
            <p>Ouvimos a queixa do paciente e oferecemos o atendimento com excelência que ele merece</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon2} alt="" width={50} />
            <h1 className="text-xl color-three font-bold">Preço Justo</h1>
            <p>Acreditamos que todos os brasileiros têm direito à saúde ocular de qualidade por um preço justo</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon3} alt="" width={50} />
            <h1 className="color-three text-xl font-bold ">Serviços De Qualidade</h1>
            <p>Contamos com equipamentos modernos e de última geração, atuando sempre com foco em sermos referência no mercado</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon4} alt="" width={50} />
            <h1 className="text-xl color-three font-bold">Profissionais Qualificados</h1>
            <p>
            Equipe composta por profissionais altamente qualificados, dedicados ao máximo para entregar o melhor para sua saúde ocular
            </p>
          </div>
        </div> 
      </div>
      <div className="flex justify-items-end items-end">
        <Image src={Oftalmo} alt="" className="w-72"/>
      </div>
    </div>
  );
};
