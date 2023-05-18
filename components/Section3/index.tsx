import Valor from "../../assets/img/valores.png"
import Local from "../../assets/img/local.png"
import Instalacao from "../../assets/img/instalacao.png"
import Image from "next/image"

export const Section3 = () => {
  return (
    <div className="p-40">
        <h1 className="text-center pb-10 text-5xl text-secondario">Hospital Oftalmológico com <br/> Estrutura de Primeiro Mundo e Valores Acessíveis</h1>
        <div className="grid grid-cols-3 items-center justify-center gap-3 text-center text-white">
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-terciario p-14">
                <Image src={Local} alt=""  className="w-60"/>
                <h1 className="text-secondario text-3xl">Ótima Localização</h1>
                <p className="text-xl">O Mira Hospital Oftalmológico está localizado no coração de Moema em São Paulo. Próximo à estação de metrô, shopping e rede hoteleira.</p>
            </div>
            <div className="flex  flex-col items-center justify-center  gap-3 rounded-xl bg-terciario p-14">
                <Image src={Instalacao} alt=""   className="w-60"/>
                <h1 className="text-secondario text-3xl">Modernas Instalações</h1>
                <p className="text-xl">O Mira Hospital Oftalmológico foi inaugurado em 2021 e conta com um Centro Cirúrgico com 3 salas equipadas com o que há de mais moderno em tecnologia na oftalmologia.</p>
            </div>
            <div className="flex  flex-col items-center justify-center  gap-3 rounded-xl bg-terciario p-14">
                <Image src={Valor} alt=""   className="w-60"/>
                <h1 className="text-secondario text-3xl">Valores Acessíveis</h1>
                <p className="text-xl">O Mira Hospital Oftalmológico oferece financiamento próprio e valores acessíveis, para você realizar a sua cirurgia plástica ocular Entre em contato e consulte.</p>
            </div>
        </div>
    </div>
  )
}
