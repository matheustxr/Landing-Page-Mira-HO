import  SliderCirurgia  from "../Swiper"

export default function Section4() {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row-reverse gap-20 px-5 py-10  lg:p-40  bgFosco text-white">
            <div className="flex flex-col flex-1 items-center justify-center text-left lg:text-right">
                <h2 className=" lg:text-right pb-10 text-3xl font-semiboldgi lg:text-5xl ">Salas Modernas com Equipamentos de Alta Tecnologia</h2>
                <p>O espaço conta com 3 salas cirúrgicas equipadas com o que há de mais moderno em tecnologia na oftalmologia. Contamos com microscópios de última geração como o Proveo 8, laser para cirurgia vítreo-retiniana CONSTELLATION®, o WHITESTAR SIGNATURE® PRO e aparelho de facectomia CENTURION®.</p>
            </div>
            <div className="lg:w-2/4">
                <SliderCirurgia />     
            </div>
        </section>
    )
}