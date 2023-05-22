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
      <div className='bg-gradient-to-r from-[#1539f1] to-[#020317] animateGradientX'>
        <Section3/>
      </div>
      <Section4/>
      <div className='bg-gradient-to-r from-[#1539f1] to-[#020317] animateGradientX'>
        <Contato/>
      </div>
<<<<<<< HEAD
      <Section6></Section6>
=======
>>>>>>> 311076f97efe34dcfb9f8d3a164d297db3d690a4
      <Footer/>
   </div>
  )
}
