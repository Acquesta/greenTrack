
function HomeTop() {


    return (
        <div className="h-screen  flex items-center justify-center align-center " id="HomeTop">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className=" w-96 h-96 bg-gradient-to-br from-azul to-verde rounded-full animate-blink-delay-2"></div>
            </div>
            <div className="absolute inset-0 flex items-start justify-start">
                <div className="mt-32 w-80 h-80 bg-gradient-to-br from-azul/50 to-verde/50 rounded-full animate-blink "></div>
            </div>
            <div className="absolute inset-0 flex items-end justify-end">
                <div className=" w-80 h-80 bg-gradient-to-br from-azul to-verde rounded-full animate-blink-delay-3"></div>
            </div>
            <div className="absolute inset-0 flex items-start justify-end">
                <div className=" w-32 h-32 mt-32 mr-24 bg-verde rounded-full animate-blink"></div>
            </div>
            <div className="absolute inset-0 flex items-end justify-start">
                <div className=" w-32 h-32 mb-32 ml-72 bg-azul rounded-full animate-blink-delay-1"></div>
            </div>
            <div className="relative text-white w-full">
                <h1 className="font-bold text-7xl sm:text-9xl uppercase text-center mb-10 mx-14">Green Track</h1>
                <p className="text-center text-2xl mx-10 ">Investir em energia sustentável é iluminar o presente sem apagar o futuro.</p>
                <a className="bg-verde bg-gradient-to-br from-verdeescuro/50 via-verde to-verdeescuro/50 py-4 px-8 text-white rounded-xl flex justify-self-center text-2xl mt-12 hover:text-verde hover:font-bold hover:bg-gradient hover:from-white hover:to-white" href="#Dores">
                    CONHEÇA
                </a>

            </div>
        </div>

    );
}



export default HomeTop;