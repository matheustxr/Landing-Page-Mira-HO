import React from 'react'

export const Section2 = () => {
  return (
    <div>
        <div className='flex items-center gap-5 justify-center bg-slate-950 p-40'>
           <div className='flex flex-col flex-1 gap-5 text-white '>
                <h1 className='text-5xl'>Conheça o Mira Hospital Oftalmológico</h1>
                <p className='text-2xl '>O Mira é um Hospital Oftalmológico equipado e focado no atendimento integral de pacientes com patologias oculares e/ou necessidades oftalmológicas.</p>
            </div>
            <div className='flex-1 shadow-slate-300 '>
                <iframe className='w-full rounded-xl' height="450" src="https://www.youtube.com/embed/uyFBUvj0XQA" title="Conheça o Mira" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </div>
  )
}
