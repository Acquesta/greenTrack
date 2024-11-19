function CardEnergias({ titulo, descricao, beneficios, imagem}) {
    return ( 
        <div className="flex flex-col lg:flex-row gap-5 ">
            <div className="w-full min-h-32 md:w-[40vw] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${imagem})`}}>
                
            </div>
            <div className="w-[50vw] md:w-auto flex flex-col  text-white">
              <h3 className="text-4xl my-5">{titulo}</h3>
              <p className="text-white text-xl mb-2">Descrição</p>
              <p className="text-cinza">{descricao}</p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="">
                    <h3 className="my-5 text-xl text-white">Ambientais</h3>
                    <p className="text-cinza">{beneficios.ambientais}</p>
                </div>
                <div className="">
                    <h3 className="my-5 text-xl text-white">Economicos</h3>
                    <p className="text-cinza">{beneficios.economicos}</p>
                </div>
                <div className="">
                    <h3 className="my-5 text-xl text-white">Sociais</h3>
                    <p className="text-cinza">{beneficios.sociais}</p>
                </div>
              </div>
            </div>
        </div>
     );
}

export default CardEnergias;