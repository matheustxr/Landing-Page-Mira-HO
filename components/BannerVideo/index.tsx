export default function Video(){
    return(
        <>
            <div className=" bg-[#020102]">
                <video autoPlay loop muted className="h-screen w-screen object-cover">
                    <source src="/videos/Olhos.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </>
    )
}
