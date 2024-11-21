import imagem from '../../assets/greentrack-contact.jpg';

function ContactMe() {
    return (
        <>
            <div className="h-full md:h-screen flex flex-col  md:flex-row items-center ">
                <div 
                    style={{ backgroundImage: `url(${imagem})` }} 
                    className="hidden md:block h-full w-full md:w-[40vw] bg-center bg-cover rounded-tl-2xl md:rounded-tr-none"
                ></div>
                <form className="form h-full mx-auto flex flex-col gap-5 w-11/12 md:w-2/3 lg:w-1/3 md:px-10 py-[18vh]">
                    <h1 className="text-verde text-3xl md:text-5xl lg:text-6xl uppercase mb-4 text-center md:text-left">Nos contate</h1>
                    <input
                        className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                    <input
                        className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4"
                        type="text"
                        placeholder="Digite seu e-mail"
                    />
                    <textarea
                        className="border border-white bg-transparent rounded-2xl p-4 text-white h-32 md:h-44 lg:h-80 w-full resize-none"
                        placeholder="Digite sua mensagem"
                    />
                    <div className="flex items-center bg-verde hover:bg-azul text-white justify-center p-2 rounded-2xl lg:mt-4 lg:p-4 cursor-pointer">
                        <input className="button" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactMe;
