import { Agendar } from "../../components/Agendar/index"
import Image from "next/image"

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/img/LOGO.png"

export default function Contato(){
    return(
        <>
            <section className="w-full flex flex-col justify-between h-screen lg:flex-row text-white lg:h-5/6">
                <div className="w-full flex flex-1 py-20 lg:ps-40 lg:pt-20 lg:pb-20 flex-col items-center lg:items-start">
                    <Image src={Logo} alt="Sorridents" className="w-[200px]" />
                    <p className="text-[20px] mb-14 text-center">Transformando sua forma de enxergar</p>
                    <h2 className="lg:text-5xl text-2xl font-semibold mb-8 text-center">Entre em Contato com o Mira</h2>
                    <h3 className="lg:text-4xl text-sm">Consultas, Exames e Cirurgias Oftalmológicas</h3>
                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex items-center justify-center rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-3" bounce size="lg"/>
                            Chamar no Whatsapp
                        </button>
                    </a>

                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex items-center justify-center rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faPhone} className="mr-3" bounce size="lg"/>
                            Ligar (11) 2737-8464
                        </button>
                    </a>

                    <a href="#" className="" >
                        <button className="p-4 mt-10 w-full min-w-[360px] lg:min-w-[370px] flex items-center justify-center rounded-xl text-xl font-semibold bg-[#00000061] border-4 animate-neon-pulse px-10">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" bounce size="lg"/>
                            Entre em contato via e-mail
                        </button>
                    </a>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7311.9752922191365!2d-46.659126!3d-23.604776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a1070eb2f83%3A0x455c96b04dad45f4!2sAlameda%20dos%20Maracatins%2C%20404%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004089-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1684512568214!5m2!1spt-BR!2sus" className="flex-1" loading="lazy"></iframe>
    
            </section>
        </>
    )
}