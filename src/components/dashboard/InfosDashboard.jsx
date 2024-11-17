function InfosDashboar({ title, description, children}) {
    return ( 
        <div className="md:ml-[15vw] px-8">
            <h2 className="text-4xl uppercase font-bold mt-10 text-white">{title}</h2>
            <p className="text-verde text-base font-thin mt-2 mb-5">{description}</p>
            {children}
        </div>
     );
}

export default InfosDashboar;