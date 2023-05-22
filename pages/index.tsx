import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'
import Section4  from '@/components/Section4'
import { Footer } from '@/components/Footer'
import Contato from "@/components/Contato"
import { Sobre } from '@/components/Sobre'
import { Section6 } from '@/components/Section6'


export default function Home() {
  return (
   <div className="">
      <Section1/>
      <Section2/>
      <div className='bg-gradient-to-r from-[#822184] via-[#42aed2] to-[#2f3b70] animateGradientX'>
        <Section3/>
      </div>
      <Section4/>
      <div className='bg-gradient-to-r from-[#822184] via-[#42aed2] to-[#2f3b70] animateGradientX'>
        <Contato/>
      </div>
      <Section6></Section6>
      <Footer/>
   </div>
  )
}
