import { useRef } from "react";
// import efeito from "../../assets/efeito.png"
import { useState } from "react";
import { useEffect } from "react";

import BotaoPassa from '../../assets/botaoPassa.svg'
import CardEnergias from "./CardEnergias";

import biomassa from '../../assets/biomassa.jpg'
import eolica from '../../assets/eolica.jpg'
import geotermica from '../../assets/geotermica.jpg'
import hidreletrica from '../../assets/hidreletrica.jpg'
import solar from '../../assets/solar.jpg'
import CardInfos from "./CardInfos";

function Importancia() {

  const [divSize, setDivSize] = useState({ width: 0, height: 0 });
  const scrollContainerRef = useRef(null);
  const scrollDireita = (direcao) => {
    if (direcao == 'left') {
      scrollContainerRef.current.scrollBy({ left: -divSize.width, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: divSize.width, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.firstChild;
        if (card) {
          const { width } = card.getBoundingClientRect();
          setDivSize({ width });
        }
      }
    }, 3000); 

    return () => clearInterval(intervalId);
}, []);

  console.log(divSize)

  const energias = [
    {
      nome: "Solar",
      descricao: "A energia solar é gerada a partir da luz do sol, convertida em eletricidade por meio de painéis solares fotovoltaicos ou concentradores solares.",
      beneficios: {
        ambientais: "Reduz as emissões de gases de efeito estufa e a dependência de combustíveis fósseis.",
        economicos: "Diminui custos de energia a longo prazo e gera empregos na instalação e manutenção de painéis solares.",
        sociais: "Pode ser implementada em áreas remotas, fornecendo energia para comunidades isoladas."
      },
      imagem: solar
    },
    {
      nome: "Eólica",
      descricao: "A energia eólica é gerada pelo movimento do vento, que impulsiona turbinas conectadas a geradores elétricos.",
      beneficios: {
        ambientais: "Não emite poluentes durante a geração e utiliza espaço compartilhado com atividades como agricultura.",
        economicos: "Reduz custos operacionais e incentiva o desenvolvimento de tecnologias locais.",
        sociais: "Gera emprego e renda em regiões com potencial eólico."
      },
      imagem: eolica
    },
    {
      nome: "Hidrelétrica",
      descricao: "A energia hidrelétrica é produzida pelo movimento da água em barragens, que aciona turbinas conectadas a geradores.",
      beneficios: {
        ambientais: "Gera energia limpa e contribui para o controle de inundações e a gestão hídrica.",
        economicos: "É uma das formas de energia mais econômicas a longo prazo e favorece a estabilidade energética.",
        sociais: "Promove o desenvolvimento de infraestrutura em áreas rurais."
      },
      imagem: hidreletrica
    },
    {
      nome: "Geotérmica",
      descricao: "A energia geotérmica é gerada pelo calor proveniente do interior da Terra, aproveitado para produzir eletricidade ou aquecer ambientes.",
      beneficios: {
        ambientais: "Produz energia de forma estável e com baixa emissão de carbono.",
        economicos: "Proporciona geração contínua de energia, reduzindo a necessidade de fontes complementares.",
        sociais: "Incentiva a pesquisa e inovação em regiões com potencial geotérmico."
      },
      imagem: geotermica
    },
    {
      nome: "Biomassa",
      descricao: "A energia de biomassa é gerada a partir da queima ou decomposição de materiais orgânicos, como resíduos agrícolas, florestais ou urbanos.",
      beneficios: {
        ambientais: "Reaproveita resíduos orgânicos e reduz a dependência de combustíveis fósseis.",
        economicos: "Gera empregos na cadeia de produção e cria valor para resíduos antes descartados.",
        sociais: "Promove o uso sustentável de recursos naturais locais."
      },
      imagem: biomassa
    }
  ];

  const vantagens = [
    {
      nome: "Redução de emissões de gases de efeito estufa",
      descricao: "A substituição de combustíveis fósseis por energias renováveis contribui diretamente para a mitigação das mudanças climáticas."
    },
    {
      nome: "Geração de empregos",
      descricao: "Setores de renováveis criam milhões de empregos em todo o mundo, especialmente em instalação, operação e manutenção."
    },
    {
      nome: "Independência energética",
      descricao: "Países podem diminuir a dependência de importação de combustíveis, aumentando sua resiliência e segurança energética."
    },
    {
      nome: "Melhoria da saúde pública",
      descricao: "A redução da poluição atmosférica melhora a qualidade do ar, beneficiando a saúde da população."
    }
  ];

  const desafios = [
    {
      nome: "Investimentos elevados",
      descricao: "A implementação de infraestrutura de renováveis exige recursos significativos, especialmente em regiões subdesenvolvidas."
    },
    {
      nome: "Adaptação da infraestrutura",
      descricao: "A rede elétrica precisa ser modernizada para integrar fontes intermitentes como solar e eólica."
    },
    {
      nome: "Políticas públicas",
      descricao: "Governos devem criar incentivos, subsídios e regulações que estimulem o uso de renováveis."
    },
    {
      nome: "Aceitação social",
      descricao: "Projetos podem enfrentar resistência devido a preocupações locais, como mudanças na paisagem ou relocação de comunidades."
    }
  ];

  const oportunidades = [
    {
      nome: "Inovação tecnológica",
      descricao: "Desenvolvimento de tecnologias mais eficientes, como armazenamento de energia e redes inteligentes."
    },
    {
      nome: "Exportação de tecnologia",
      descricao: "Países líderes em renováveis podem se tornar exportadores de equipamentos e conhecimento técnico."
    },
    {
      nome: "Desenvolvimento regional",
      descricao: "Projetos renováveis impulsionam economias locais, principalmente em áreas rurais."
    },
    {
      nome: "Diversificação econômica",
      descricao: "Promove novas indústrias e reduz a dependência de combustíveis fósseis."
    }
  ];

  return (
    <>
      <section className="relative" id="Importancia">
        <div className="absolute inset-0 flex items-end justify-start">
          <div className=" w-32 h-32 mb-32 ml-72 bg-azul rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      <section className="relative z-1 pt-24" id="Importancia">

        <section className=" w-full text-white">
          <h1 className="my-16 mx-14 text-4xl  md:text-6xl uppercase justify-self-center font-medium text-center">Importância da transição energética</h1>
          <h2 className="mb-8 mx-5 sm:mx-14 text-3xl uppercase justify-self-center font-medium text-center">Tipos de energia</h2>
        </section>

        <section className="flex item-center mx-10">
          <button className="hidden lg:block" onClick={() => scrollDireita('left')}>
            <img className=" rotate-180 h-40 min-w-14" src={BotaoPassa} alt="botao para passar slide" />
          </button>
          <article ref={scrollContainerRef} className=" flex justify-start overflow-scroll overflow-y-hidden overflow-x-hidden max-w-[90vw] mx-0 md:mx-auto ">

            {energias.map((energia) => (
              <CardEnergias
                titulo={energia.nome}
                descricao={energia.descricao}
                beneficios={energia.beneficios}
                imagem={energia.imagem}
              />
            ))}

          </article>
          <button className="hidden lg:block" onClick={() => scrollDireita('right')}>
            <img className="h-40 min-w-14" src={BotaoPassa} alt="botao para passar slide" />
          </button>
        </section>

        <section className="flex gap-10 justify-center mt-10">
          <button className="hidden max-lg:block" onClick={() => scrollDireita('left')}>
            <img className=" rotate-180 h-14 min-w-14" src={BotaoPassa} alt="botao para passar slide" />
          </button>
          <button className="hidden max-lg:block" onClick={() => scrollDireita('right')}>
            <img className="h-14 min-w-14" src={BotaoPassa} alt="botao para passar slide" />
          </button>
        </section>

        <section className=" w-full text-white">
          <h2 className="my-16 mx-5 sm:mx-14 text-3xl uppercase justify-self-center font-medium text-center">Vantagens da transição para um modelo sustentável</h2>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-16">
            {
              vantagens.map((vantagem) => (
                <CardInfos
                  nome={vantagem.nome}
                  descricao={vantagem.descricao}
                />
              ))
            }
          </article>
        </section>

        <section className="w-full text-white">
          <h2 className="my-16 mx-5 sm:mx-14 text-3xl uppercase justify-self-center font-medium text-center">Desafios da transição energética</h2>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-16">
            {
              desafios.map((desafio) => (
                <CardInfos
                  nome={desafio.nome}
                  descricao={desafio.descricao}
                  fill
                />
              ))
            }
          </article>
        </section>
        <div className="bottom-64 absolute flex  w-full justify-center">
          <div className=" w-[30vw] h-[30vw] mx-auto bg-gradient-to-br from-azul/60 to-verde/60 rounded-full blur-3xl -z-10"></div>
        </div>
        <section className=" w-full text-white">
          <h2 className="my-16 mx-5 sm:mx-14 text-3xl uppercase justify-self-center font-medium text-center">Oportunidades de desenvolvimento no setor</h2>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-16">
            {
              oportunidades.map((oportunidade) => (
                <CardInfos
                  nome={oportunidade.nome}
                  descricao={oportunidade.descricao}
                />
              ))
            } 
          </article>
        </section>
      </section>

    </>
  );
}

export default Importancia;