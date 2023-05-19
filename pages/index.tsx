import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'
import Section4  from '@/components/Section4'
import Section5  from '@/components/Section5'
import { Footer } from '@/components/Footer'
import Contato from "@/components/Contato"




export default function Home() {
  return (
   <div className="">
      <Section1/>
      <Section2/>
      <div className='bg-gradient-to-r from-[#1539f1] to-[#020317] animateGradientX'>
        <Section3/>
        <Contato/>
      </div>
      
      <Section4/>
      <Section5 />
      <Footer/>
   </div>
  )
}
