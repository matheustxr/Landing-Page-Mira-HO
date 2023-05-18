import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'
import Contato from "@/components/Contato"
import Section4  from '@/components/Section4'



export default function Home() {
  return (
   <div className="">
      <Section1/>
      <Section2/>
      <Section3/>
      <Contato/>
      <Section4 />
   </div>
  )
}
