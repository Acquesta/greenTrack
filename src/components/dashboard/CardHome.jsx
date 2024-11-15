function CardHome({ nome, width = '100%', height = 40, children }) {
    return ( 
        <div style={{width: width}}>
            <h2 className="text-white text-3xl font-bold">{nome}</h2>
            <div style={{height: height + "vh"}} className={`flex flex-col gap-3 mt-3 bg-[#202731] rounded-lg py-5`}>
                {children}
            </div>
        </div>
     );
}

export default CardHome;