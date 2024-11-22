function Sugestoes() {
    return (
        <section className="min-h-screen pt-24 text-white" id="Sugestoes">
            <section>
                <h1 className="my-10 mx-6 sm:mx-14 text-3xl sm:text-6xl uppercase justify-self-center font-medium text-center">
                    Sugestões para <em>reduzir</em> consumo de energia
                </h1>
            </section>
            <div className="absolute flex items-center w-full justify-center -z-10">
                <div className="w-[50vw] h-96 mx-auto my-10 bg-azul rounded-full blur-3xl"></div>
            </div>
            <section className="flex justify-center items-center px-4">
                <iframe
                    src="https://www.youtube.com/embed/LCpAUU7KLdk?si=CXfjW_peKLXltgJ0"
                    title="YouTube video"
                    className="aspect-video w-full sm:w-3/4 lg:w-1/2"
                    allowFullScreen
                ></iframe>
            </section>
            <section className="my-12 px-6 sm:px-14 flex flex-col md:flex-row items-center justify-center">
                <h2 className="text-xl sm:text-3xl font-semibold mb-6 uppercase text-center">
                    Apoie empresas que investem em <strong className="text-azul">sustentabilidade 🌎</strong>
                </h2>
                <ul className="list-disc pl-6 sm:pl-10 space-y-4">
                    <li>
                        Escolha produtos de marcas que utilizem fontes renováveis em suas operações. Por exemplo, empresas que fabricam
                        produtos com energia solar ou eólica.
                    </li>
                    <li>
                        Verifique se os fornecedores de serviços, como bancos ou operadoras de telefonia, têm políticas claras de
                        sustentabilidade.
                    </li>
                    <li>
                        Informe-se sobre a possibilidade de contratar planos de energia renovável por meio da sua concessionária local ou
                        de startups especializadas em geração distribuída.
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default Sugestoes;
