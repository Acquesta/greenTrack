import LogoGreenTrack from '../../assets/LogoGreenTrack.png';

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
                            <li><a href="">FIA Formula E</a></li>
                            <li><a href="">Pacto Global</a></li>
                            <li><a href="">Tech Mahindra</a></li>
                            <li><a href="">SAP</a></li>
                            <li><a href="">Ultracargo</a></li>
                            <li><a href="">Ultragaz</a></li>
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
                <a href="">Política de Privacidade</a>
                <a href="">Termos e Condições</a>
                <a href="">Política de Cookies</a>
                </div>
                <div>
                    <p>Logo</p>
                    <p>Logo</p>
                    <p>Logo</p>
                    <p>Logo</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;