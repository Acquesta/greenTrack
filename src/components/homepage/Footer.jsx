import LogoGreenTrack from '../../assets/LogoGreenTrack.png';
import * as Icon from 'react-feather';

function Footer() {
    return (
        <footer className="border-t border-[#484747] text-white bg-fundo z-30">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
                <div className="w-full flex justify-center items-center">
                    <img src={LogoGreenTrack} alt="Logo GreenTrack" className="max-w-[150px]" />
                </div>
                <div>
                    <p className="mb-2 font-bold">PARCEIROS</p>
                    <nav>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-cinza">
                            <li><a href="https://www.fiaformulae.com/pt-br/news">FIA Formula E</a></li>
                            <li><a href="https://www.pactoglobal.org.br/">Pacto Global</a></li>
                            <li><a href="https://www.techmahindra.com/">Tech Mahindra</a></li>
                            <li><a href="https://www.sap.com/brazil/index.html">SAP</a></li>
                            <li><a href="https://www.ultracargo.com.br/">Ultracargo</a></li>
                            <li><a href="https://www.ultragaz.com.br/">Ultragaz</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className="mb-2 font-bold">NOSSA PÁGINA</p>
                    <nav>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-cinza">
                            <li><a href="/Dashboard">Dashboard</a></li>
                            <li><a href="#Dores">Dores</a></li>
                            <li><a href="#Importancia">Importância</a></li>
                            <li><a href="#Tecnologia">Tecnologia</a></li>
                            <li><a href="#Sugestoes">Sugestões</a></li>
                            <li><a href="/Contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="md:col-span-2">
                    <h1 className="font-bold mb-6">Subscreva a nossa Newsletter</h1>
                    <p className="mb-5 text-cinza">Inscreva-se na nossa newsletter e acompanhe a gente salvando o mundo.</p>
                    <div className="flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="O seu email"
                            className="h-12 w-full px-4 text-fundo border border-cinza focus:outline-none"
                        />
                        <button className="border text-white px-4 py-2 h-12 hover:bg-azul transition">
                            Subscrever
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t py-6 px-8">
                <div className="flex flex-col md:flex-row justify-between  gap-4 text-cinza text-sm">
                    <div className="flex flex-col md:flex-row gap-4 ">
                        <p className='justify-center flex'> © 2024 . Todos os direitos reservados.</p>
                        <div className="flex flex-wrap gap-4 underline justify-center">
                            <a href="*">Política de Privacidade</a>
                            <a href="*">Termos e Condições</a>
                            <a href="*">Política de Cookies</a>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Icon.Facebook className="cursor-pointer" />
                        <Icon.Instagram className="cursor-pointer" />
                        <Icon.Twitter className="cursor-pointer" />
                        <Icon.Linkedin className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
