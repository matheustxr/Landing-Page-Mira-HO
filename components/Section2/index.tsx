import Image from "next/image";

import ModalVideo from "../Modal/index";

import medDesk from "../../assets/img/pctrans.webp";
import medMob from "../../assets/img/mobiletrans.webp";
import VideoModal from "../Modal/index";

export const Section2 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-center bg-slate-950">
        <div className="flex px-5 pt-10 lg:pl-40 flex-col flex-1 gap-5 text-white ">
          <h1 className="text-5xl">Conheça o Mira Hospital Oftalmológico</h1>
          <p className="text-2xl ">
            O Mira é um Hospital Oftalmológico equipado e focado no atendimento
            integral de pacientes com patologias oculares e/ou necessidades
            oftalmológicas.
          </p>
        </div>

        <div className="relative">
          <Image
            src={medDesk}
            alt="Sorridents"
            className="w-[800px]  hidden lg:block"
          />
          <Image src={medMob} alt="Sorridents" className=" lg:hidden" />

          <VideoModal videoUrl="https://www.youtube.com/embed/uyFBUvj0XQA" />
        </div>
      </div>
    </div>
  );
};
