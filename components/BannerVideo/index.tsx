export default function Video(){
    return(
        <>
            <div className="bgVideo">
                <video autoPlay loop muted className="h-screen w-screen object-cover bgVideo">
                    <source src="/videos/Olhos.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </>
    )
}
