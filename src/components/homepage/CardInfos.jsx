function CardInfos({ nome, descricao, fill = false }) {
    return (
        <article 
            className={`border ${fill ? 'bg-cinza text-fundo' : 'border-cinza'} rounded-lg w-full px-5 py-5 text-center`}
        >
            <section>
                <h2 className={`${fill && 'text-verde'} text-2xl mb-3 font-bold`}>
                    {nome}
                </h2>
            </section>
            <p className="text-xl">{descricao}</p>
        </article>
    );
}

export default CardInfos;
