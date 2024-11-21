function InfosDashboar({ title, description, children, themeMode}) {
    return ( 
        <div className="md:ml-[15vw] px-8">
            <h2 className={`text-4xl uppercase font-bold mt-10 text-${themeMode == 'dark' ? 'white' : 'fundo'}`}>{title}</h2>
            <p className="text-verde text-base font-thin mt-2 mb-5">{description}</p>
            {children}
        </div>
     );
}

export default InfosDashboar;