function CardTecnologia({ nome, descricao, imagem, invertido }) {
    return (
        <section
            key={nome}
            className={`flex mt-5 w-full max-md:flex-col gap-10 px-10 sm:px-20 ${
                invertido ? "flex-row-reverse" : "flex-row"
            } justify-between items-center`}
        >
            <figure
                className="w-full md:w-1/2 rounded-lg h-[20vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${imagem})` }}
                aria-label={nome}
            ></figure>
            <article className="flex flex-col gap-10 w-full md:w-1/2">
                <h2 className="text-white text-xl font-bold">{nome}</h2>
                <p className="text-cinza">{descricao}</p>
            </article>
        </section>
    );
}

export default CardTecnologia;
