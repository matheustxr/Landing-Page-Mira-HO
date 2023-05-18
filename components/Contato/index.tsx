import { Agendar } from "../../components/Agendar/index"
import Image from "next/image"

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/img/LOGO.png"

export default function Contato(){
    return(
        <>
            <section className="w-full px-5 lg:px-0 bg-gradient-to-r from-[#1539f1] to-[#020317] animateGradientX text-white">
                <div className="py-10 flex flex-col items-center  ">
                    <Image src={Logo} alt="Sorridents" className="w-[200px] m-auto " />
                    <p className="text-[20px] mb-14">Transformando sua forma de enxergar</p>
                    <h2 className="text-5xl font-semibold mb-8">Entre em Contato com o Mira</h2>
                    <h3 className="text-4xl">Consultas, Exames e Cirurgias Oftalmológicas</h3>
                    <a href="#">
                        <button className="p-4 mt-10 min-w-[368px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-3" bounce size="lg"/>
                            Chamar no Whatsapp
                        </button>
                    </a>

                    <a href="#">
                        <button className="p-4 mt-10 min-w-[368px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faPhone} className="mr-3" bounce size="lg"/>
                            Ligar (11) 2737-8464
                        </button>
                    </a>

                    <a href="#">
                        <button className="p-4 mt-10 min-w-[368px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" bounce size="lg"/>
                            Entre em contato via e-mail
                        </button>
                    </a>
                    
                </div>
            </section>
        </>
    )
}