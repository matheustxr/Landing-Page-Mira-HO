import { Agendar } from "../../components/Agendar/index"
import Image from "next/image"

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/img/LOGO.png"

export default function Contato(){
    return(
        <>
            <section className="w-full px-5 bg-secondario text-white">
                <div className="py-10 flex flex-col items-center bg-sky-500 ">
                    <Image src={Logo} alt="Sorridents" className="m-auto" />
                    
                    <button className="p-4 rounded-xl text-xl bg-green-500 px-10">
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-3"/>
                        Chame no Whatsapp
                    </button>
                </div>
            </section>
        </>
    )
}