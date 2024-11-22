import google from '../../assets/devicon_google.png'
import facebook from '../../assets/logos_facebook.png'
import github from '../../assets/bi_github.png'

import imagem from '../../assets/greenTrackLogin.jpg'

function Inputs({ titulo, descricao, inputs, botao, outraPagina = ['' ,''], mudaValue, funcao}) {
    return ( 
        <div className="flex items-center">
            <div style={{backgroundImage: `URL(${imagem})`}} className="hidden xl:block h-screen w-[30vw] bg-center bg-cover">
                
            </div>
            <div className="absolute right-[30vw] top-[10vh] h-[20vw] w-[20vw] bg-gradient-to-b from-[#00611B] to-[#2B4A61] rounded-full">
                
            </div>
            <div className="absolute right-[20vw] bottom-[10vh] h-[10vw] w-[10vw] bg-gradient-to-b from-[#00611B] to-[#2B4A61] rounded-full">
                
            </div>
            <section className="w-2/3 xl:w-1/4 mx-auto flex flex-col justify-evenly my-[25vh] pt-5 pb-10 px-10 backdrop-blur-lg border border-white rounded-lg shadow-xl">
                <h2 className="text-white text-4xl">{titulo}</h2>
                <p className="text-white font-light mt-2">{descricao}</p>
                <section className="flex flex-col gap-5 mt-10">
                    {
                        inputs.map((input, index) => (
                            <input onChange={(e) => mudaValue(e.target.value, index)} className="px-5 py-2 bg-transparent border border-white rounded-xl text-white" placeholder={input.label} type={input.type} key={index} />
                        ))
                    }
                </section>
                <button onClick={() => funcao()} className="mt-5 py-2 w-full bg-gradient-to-r from-[#00611B] via-verde to-[#00611B] rounded-xl text-white font-bold">{botao}</button>
                {
                    botao === 'Login' ? <p className="text-white text-center my-2 mt-4"><a href="/RedefinirSenha">Esqueceu a senha?</a></p> : ''
                }
                <section className="flex justify-between items-center gap-10 mt-10">
                    <div className="w-full h-[1px] bg-white"></div>
                    <div>
                        <p className="text-white text-xs">Ou</p>
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                </section>
                <section className='flex gap-3 justify-center my-4'>
                    <img src={google} alt="logo do google" />
                    <img src={facebook} alt="logo do facebook" />
                    <img src={github} alt="logo do github" />
                </section>
                <p className='text-white text-center text-sm'><a href={outraPagina[1]}>{outraPagina[0]}</a></p>
                <footer className='flex justify-center gap-5 text-sm text-white my-3'>
                    <p>Termos e Condições</p>
                    <p>Suporte</p>
                    <p>Atendimento</p>
                </footer>
            </section>
        </div>
     );
}

export default Inputs;