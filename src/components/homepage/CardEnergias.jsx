function CardEnergias({ titulo, descricao, beneficios, imagem }) {
    return (
        <section className="flex flex-col lg:flex-row gap-5 min-w-full px-10 h-auto" key={titulo}>
            <figure 
                className="w-full min-h-32 lg:w-[50vw] bg-cover bg-center rounded-xl" 
                style={{ backgroundImage: `url(${imagem})` }}
                aria-label={titulo}
            ></figure>
            <article className="w-auto flex flex-col text-white">
                <section>
                    <h2 className="text-4xl my-5">{titulo}</h2>
                </section>
                <section>
                    <h3 className="text-white text-xl mb-2">Descrição</h3>
                    <p className="text-cinza">{descricao}</p>
                </section>
                <section className="flex flex-col md:flex-row gap-4">
                    <article>
                        <h4 className="my-5 text-xl text-white">Ambientais</h4>
                        <p className="text-cinza">{beneficios.ambientais}</p>
                    </article>
                    <article>
                        <h4 className="my-5 text-xl text-white">Econômicos</h4>
                        <p className="text-cinza">{beneficios.economicos}</p>
                    </article>
                    <article>
                        <h4 className="my-5 text-xl text-white">Sociais</h4>
                        <p className="text-cinza">{beneficios.sociais}</p>
                    </article>
                </section>
            </article>
        </section>
    );
}

export default CardEnergias;
