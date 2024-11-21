import noor from "../../assets/noor.jpg"
import hornsea from "../../assets/hornsea.jpg"
import gemasolar from "../../assets/gemasolar.jpg"
import bess from "../../assets/bess.jpeg"
import CardTecnologia from "./CardTecnologia"

function Tecnologia() {
    const cards = [
        {
            nome: "Parque Solar Noor Ouarzazate (Marrocos)",
            descricao: "O maior complexo solar do mundo, com capacidade de 580 MW, fornece energia para 1 milhão de pessoas e reduz as emissões de CO₂ em 760 mil toneladas por ano.",
            imagem: noor,
            invertido: true
        },
        {
            nome: "Projeto Hornsea One (Reino Unido)",
            descricao: "Maior parque eólico offshore do mundo, com capacidade de 1,2 GW, alimentando mais de 1 milhão de residências.",
            imagem: hornsea,
            invertido: false
        },
        {
            nome: "Gemasolar (Espanha)",
            descricao: "Usina solar térmica que utiliza sal fundido para armazenar energia, permitindo a geração de eletricidade mesmo à noite.",
            imagem: gemasolar,
            invertido: true
        },
        {
            nome: "Battery Energy Storage System (BESS) da Tesla (Austrália)",
            descricao: "Uma das maiores instalações de baterias do mundo, ajudando a estabilizar a rede elétrica e a reduzir custos de energia.",
            imagem: bess,
            invertido: false
        },
    ]



    return (
        <div className=" pt-24" id="Tecnologia">
            <h1 className="my-10 mx-14 text-4xl  md:text-6xl uppercase justify-self-center font-medium text-center text-white">O papel da tecnologia</h1>
            <h2 className="mb-8 mx-14 text-3xl uppercase justify-self-center font-medium text-center text-white">Tecnologias mais recentes e inovadoras</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-10">
                <div className="text-cinza text-center px-20 lg:px-24">
                    <h3 className="text-azul uppercase text-xl font-bold mb-4">Geração de energia renovável</h3>
                    <h4 className="font-bold text-white text-lg mb-4">Turbinas eólicas flutuantes</h4>
                    <p>Permitem a geração de energia em alto-mar, onde os ventos são mais fortes e constantes.</p>
                    <p className="mt-3"><strong className="font-bold text-white uppercase">Exemplo:</strong> O projeto Hywind Scotland, o primeiro parque eólico flutuante do mundo, tem capacidade de 30 MW.</p>
                </div>
                <div className="text-cinza text-center px-20 lg:px-24">
                    <h3 className="text-azul uppercase text-xl font-bold mb-4">Armazenamento de energia</h3>
                    <h4 className="font-bold text-white text-lg mb-4">Hidrogênio verde</h4>
                    <p>Produzido a partir de energia renovável, pode ser armazenado e usado como combustível limpo.</p>
                    <p className="mt-3"><strong className="font-bold text-white uppercase">Exemplo:</strong> A instalação de hidrogênio verde de NEOM na Arábia Saudita será uma das maiores do mundo.</p>
                </div>
                <div className="text-cinza text-center px-20 lg:px-24">
                    <h3 className="text-azul uppercase text-xl font-bold mb-4">Distribuição de energia</h3>
                    <h4 className="font-bold text-white text-lg mb-4">Microgrids</h4>
                    <p>Redes locais de energia que operam de forma independente ou conectadas à rede principal, oferecendo resiliência contra interrupções.</p>
                    <p className="mt-3"><strong className="font-bold text-white uppercase">Exemplo:</strong> A Ilha de Kodiak, no Alasca, é alimentada quase inteiramente por uma microgrid renovável composta de energia eólica e hidrelétrica.</p>
                </div>
            </div>

            <h2 className="mb-8 mx-14 text-3xl uppercase justify-self-center font-medium text-center text-white">Exemplos de projetos e iniciativas bem-sucedidas</h2>
            <div className="w-2/3 mx-auto my-5 flex flex-col max-md:w-full gap-14">
                {
                    cards.map(card => (
                        <CardTecnologia
                            nome={card.nome}
                            descricao={card.descricao}
                            imagem={card.imagem}
                            invertido={card.invertido} />
                    ))
                }
            </div>
            <div className="mt-24 px-14 flex flex-col items-center justify-center text-white">
                    <h2 className="text-xl sm:text-3xl font-semibold uppercase text-center mb-6">
                        A <strong className="font-bold text-verde">Internet</strong> na transição energética 📱
                    </h2>
                <ul className=" space-y-4 text-center">
                    <li>
                        Plataformas online e redes sociais permitem compartilhar avanços científicos, boas práticas e oportunidades de financiamento.
                    </li>
                    <li>
                        Redes como o LinkedIn promovem networking entre profissionais do setor.
                    </li>
                    <li>
                        Comunidades de código aberto, como a Open Energy Modelling Initiative, criam ferramentas para planejamento energético colaborativo.
                    </li>
                    <li>
                        A Internet das Coisas (IoT) permite a integração de dispositivos, otimizando o consumo e a geração em tempo real.
                    </li>
                </ul>

            </div>

        </div>

    );
}

export default Tecnologia;