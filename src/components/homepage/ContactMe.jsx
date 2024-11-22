import imagem from '../../assets/greentrack-contact.jpg';

function ContactMe() {
    return (
        <section className="h-full md:h-screen flex flex-col md:flex-row items-center">
            <figure
                style={{ backgroundImage: `url(${imagem})` }}
                className="hidden md:block h-full w-full md:w-[40vw] bg-center bg-cover rounded-tl-2xl md:rounded-tr-none"
            ></figure>
            <form
                className="form h-full mx-auto flex flex-col gap-5 w-11/12 md:w-2/3 lg:w-2/4 md:px-10 py-[18vh]"
            >
                <section>
                    <h1 className="text-verde text-3xl md:text-5xl lg:text-6xl uppercase mb-4 text-center md:text-left">
                        Nos contate
                    </h1>
                </section>
                <div className="flex flex-col gap-5">
                    <label>
                        <span className="sr-only">Nome</span>
                        <input
                            className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4 w-full"
                            type="text"
                            placeholder="Digite seu nome"
                            required
                        />
                    </label>
                    <label>
                        <span className="sr-only">E-mail</span>
                        <input
                            className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4 w-full"
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </label>
                    <label>
                        <span className="sr-only">Mensagem</span>
                        <textarea
                            className="border border-white bg-transparent rounded-2xl p-4 text-white h-32 md:h-44 w-full resize-none"
                            placeholder="Digite sua mensagem"
                            required
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="flex items-center bg-verde hover:bg-azul text-white justify-center p-2 rounded-2xl lg:mt-4 lg:p-4 cursor-pointer"
                    onClick={()=>{alert("E-mail enviado.")}}>
                    Enviar
                </button>
            </form>
        </section>
    );
}

export default ContactMe;
