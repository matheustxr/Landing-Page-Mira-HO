import Image from "next/image"
import SobreSallus from "../../assets/img/sobreSallus.png"

export const Section6 = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row-reverse gap-20  pt-10  lg:p-40  bgFosco text-white">
        <Image className="w-full md:w-2/6 lg:w-3/6 rounded" src={SobreSallus} alt="Sallus"/>
        <div className="flex flex-col flex-1 items-start justify-center text-left lg:text-left px-5">
            <h2 className="pt-10 pb-10 text-3xl font-semiboldgi lg:text-5xl ">Sobre o Grupo Salus</h2>
            <p className="">
                O Grupo Salus é uma holding que está há mais de 28 anos no mercado e que possui reconhecimento internacional no segmento. Por meio de seu ecossistema de saúde, beleza e bem-estar, oferece serviços completos e integrados de cuidados com o selo de qualidade que só o Grupo Salus tem.
                Marcas como Sorridents e GiOlaser integram esse empreendimento que tem como principal missão inovar e fornecer serviços acessíveis e de qualidade. O Hospital Mira faz parte dessa proposta, por isso, estende os valores e as missões do Grupo Salus em seus serviços, oferecendo um atendimento especializado e confiável.
            </p>
        </div>   
    </section>
    )
}

