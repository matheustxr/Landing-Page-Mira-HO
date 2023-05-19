import Image from "next/image"
import Logo from "../../assets/img/LOGO.png"

export const Footer = () => {
  return (
    <div className="bg-terciario flex items-center justify-center flex-col gap-5 ps-40 pe-40 pt-10 pb-10 text-white text-xl">
        <Image src={Logo} alt=""/>
        <span>2023 Copyright Hospital Mira</span>
        <a href="https://www.bmouseproductions.com/" target="_blank">Desenvolvido por Bmouse Productions</a>
    </div>
  )
}
