import google from '../../assets/devicon_google.png'
import facebook from '../../assets/logos_facebook.png'
import github from '../../assets/bi_github.png'

import imagem from '../../assets/greenTrackLogin.jpg'

function Inputs({ titulo, descricao, inputs, botao, outraPagina}) {
    return ( 
        <div className="flex items-center">
            <div style={{backgroundImage: `URL(${imagem})`}} className="hidden lg:block h-screen w-[25vw] bg-center bg-cover">
                
            </div>
            <div className="absolute right-[30vw] top-[10vh] h-[20vw] w-[20vw] bg-gradient-to-b from-[#00611B] to-[#2B4A61] rounded-full">
                
            </div>
            <div className="absolute right-[20vw] bottom-[10vh] h-[10vw] w-[10vw] bg-gradient-to-b from-[#00611B] to-[#2B4A61] rounded-full">
                
            </div>
            <div className="z-10 w-2/3 lg:w-1/4 mx-auto pt-20 pb-10 px-10 backdrop-blur-sm border border-white rounded-lg shadow-xl">
                <h2 className="text-white text-4xl">{titulo}</h2>
                <p className="text-white font-light">{descricao}</p>
                <div className="flex flex-col gap-5 mt-10">
                    {
                        inputs.map((input, index) => (
                            <input className="px-5 py-2 bg-transparent border border-white rounded-xl text-white" placeholder={input.label} type={input.type} key={index} />
                        ))
                    }
                </div>
                <button className="mt-5 py-2 w-full bg-gradient-to-r from-[#00611B] via-verde to-[#00611B] rounded-xl text-white font-bold">{botao}</button>
                {
                    botao === 'Login' ? <p className="text-white text-center my-2">Esqueceu a senha? </p> : ''
                }
                <div className="flex justify-between items-center gap-10 mt-10">
                    <div className="w-full h-[1px] bg-white"></div>
                    <div>
                        <p className="text-white text-xs">Ou</p>
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                </div>
                <div className='flex gap-3 justify-center my-4'>
                    <img src={google} alt="logo do google" />
                    <img src={facebook} alt="logo do facebook" />
                    <img src={github} alt="logo do github" />
                </div>
                <p className='text-white text-center text-sm'>{outraPagina}</p>
                <div className='flex justify-center gap-5 text-sm text-white my-3'>
                    <p>Termos e Condições</p>
                    <p>Suporte</p>
                    <p>Atendimento</p>
                </div>
            </div>
        </div>
     );
}

export default Inputs;