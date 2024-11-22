function CardHome({ nome, width = '100%', height = '40vh', themeMode, children }) {
    return ( 
        <article className="my-5 rounded-lg" style={{width: width}}>
            <h2 className={`text-${themeMode == 'dark' ? 'white' : 'fundo'} text-3xl font-bold`}>{nome}</h2>
            <div style={{height: height}} className={`flex flex-col gap-3 mt-3 bg-${themeMode == 'dark' ? '[#202731]' : 'white'} rounded-lg py-5 shadow-md`}>
                {children}
            </div>
        </article>
     );
}

export default CardHome;