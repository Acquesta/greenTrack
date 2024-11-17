import LogoGreenTrack from '../../assets/LogoGreenTrack.png';
import * as Icon from 'react-feather';


function Footer() {
    return ( 
        <footer className="border-t border-[#484747] text-white">
            <div className='grid'>
                <div>
                    <img src={LogoGreenTrack} alt="logo greentrack"/>
                </div>
                <div>
                    <p>PARCEIROS</p>
                    <nav>
                        <ul>
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
                    <p>Inscreva-se na nossa newsletter e acompanhe a gente salvando o mundo </p>
                    <input type="email" name="" id="" />
                    <button>Subscrever</button>
                </div>
            </div>
            <div className='border-t mx-40'>
                <div>
                <p>© 2024 . Todos os direitos reservados.</p>
                <a href="*">Política de Privacidade</a>
                <a href="*">Termos e Condições</a>
                <a href="*">Política de Cookies</a>
                </div>
                <div className='cursor-pointer'>
                    <Icon.Facebook/>
                    <Icon.Instagram/>
                    <Icon.Twitter/>
                    <Icon.Linkedin/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;