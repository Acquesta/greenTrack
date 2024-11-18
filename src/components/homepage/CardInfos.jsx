function CardInfos({ nome, descricao, fill = false }) {



    return ( 
        <div className={`border ${fill ? 'bg-cinza text-fundo' : 'border-cinza'}  rounded-lg w-1/4 px-5 py-5 text-center`}>
            <h3 className={`${fill && 'text-verde
                '} text-2xl mb-3 font-bold`}>{nome}</h3>
            <p className="text-xl">{descricao}</p>
        </div>
     );
}

export default CardInfos;