import { Agendar } from "../../components/Agendar/index"
import Image from "next/image"

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/img/LOGO.png"

export default function Contato(){
    return(
        <>
            <section className="w-full flex px-5 py-10 lg:py-14 lg:px-20   text-white">
                <div className="w-full flex  flex-col items-center  ">
                    <Image src={Logo} alt="Sorridents" className="w-[200px]" />
                    <p className="text-[20px] mb-14 text-center">Transformando sua forma de enxergar</p>
                    <h2 className="text-5xl font-semibold mb-8 text-center">Entre em Contato com o Mira</h2>
                    <h3 className="text-4xl ">Consultas, Exames e Cirurgias Oftalmológicas</h3>
                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-3" bounce size="lg"/>
                            Chamar no Whatsapp
                        </button>
                    </a>

                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faPhone} className="mr-3" bounce size="lg"/>
                            Ligar (11) 2737-8464
                        </button>
                    </a>

                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex  rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" bounce size="lg"/>
                            Entre em contato via e-mail
                        </button>
                    </a>
                </div>
                
            </section>
        </>
    )
}