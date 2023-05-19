import  SliderCirurgia  from "../Swiper"

export default function Section4() {
    return (
        <section className="w-full px-5 py-10  lg:p-40  bg-[#020617] text-white">
            <h2 className="text-center pb-10 text-3xl font-semiboldgi lg:text-5xl ">Salas Modernas com Equipamentos de Alta Tecnologia</h2>
            <div className="flex flex-col lg:flex-row">
                <p>O espaço conta com 3 salas cirúrgicas equipadas com o que há de mais moderno em tecnologia na oftalmologia. Contamos com microscópios de última geração como o Proveo 8, laser para cirurgia vítreo-retiniana CONSTELLATION®, o WHITESTAR SIGNATURE® PRO e aparelho de facectomia CENTURION®.</p>
                <div className="max-w-[50%]">
                    <SliderCirurgia />
                    
                </div>
            </div>
            
        </section>
    )
}