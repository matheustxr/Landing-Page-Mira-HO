import Image from "next/image"
import Logo from "../../assets/img/LOGO.png"

export const Footer = () => {
  return (
    <div className="bg-terciario flex items-start justify-start ps-10 pt-14 pb-14 flex-col gap-3 lg:items-center lg:items-center lg:gap-5 lg:ps-40 lg:pe-40 lg:pt-10 lg:pb-10 text-white text-xl">
        <Image src={Logo} alt="" className="w-40"/>
        <span>2023 Copyright Hospital Mira</span>
        <a href="https://www.bmouseproductions.com/" target="_blank">Desenvolvido por Bmouse Productions</a>
    </div>
  )
}
