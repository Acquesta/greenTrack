import { NavLink } from 'react-router-dom';
import LogoGreenTrack from '../../assets/LogoGreenTrack.png';
import * as Icon from 'react-feather';

function Footer() {
    return (
        <footer className="border-t border-[#484747] text-white bg-fundo z-30">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
                <div className="w-full flex justify-center items-center">
                    <img src={LogoGreenTrack} alt="Logo GreenTrack" className="max-w-[150px]" />
                </div>

                <section>
                    <h2 className="mb-2 font-bold">Parceiros</h2>
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
                </section>

                <section>
                    <h2 className="mb-2 font-bold">Nossa Página</h2>
                    <nav>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-cinza">
                            <li><NavLink href="/Login">Dashboard</NavLink></li>
                            <li><a href="#Dores">Dores</a></li>
                            <li><a href="#Importancia">Importância</a></li>
                            <li><a href="#Tecnologia">Tecnologia</a></li>
                            <li><a href="#Sugestoes">Sugestões</a></li>
                            <li><NavLink href="/Contact">Contato</NavLink></li>
                        </ul>
                    </nav>
                </section>

                <section className="md:col-span-2">
                    <h2 className="font-bold mb-6">Subscreva a nossa Newsletter</h2>
                    <p className="mb-5 text-cinza">Inscreva-se na nossa newsletter e acompanhe a gente salvando o mundo.</p>
                    <form className="flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="O seu email"
                            className="h-12 w-full px-4 text-fundo border border-cinza focus:outline-none"
                            aria-label="Digite o seu email"
                        />
                        <button
                            type="submit"
                            className="border text-white px-4 py-2 h-12 hover:bg-azul transition"
                        >
                            Subscrever
                        </button>
                    </form>
                </section>
            </div>

            <div className="border-t py-6 px-8">
                <div className="flex flex-col md:flex-row justify-between gap-4 text-cinza text-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                        <p className="text-center">© 2024. Todos os direitos reservados.</p>
                        <nav className="flex flex-wrap gap-4 underline justify-center">
                            <a href="*">Política de Privacidade</a>
                            <a href="*">Termos e Condições</a>
                            <a href="*">Política de Cookies</a>
                        </nav>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <a href="https://facebook.com">
                            <Icon.Facebook className="cursor-pointer" />
                        </a>
                        <a href="https://instagram.com">
                            <Icon.Instagram className="cursor-pointer" />
                        </a>
                        <a href="https://twitter.com">
                            <Icon.Twitter className="cursor-pointer" />
                        </a>
                        <a href="https://linkedin.com">
                            <Icon.Linkedin className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
