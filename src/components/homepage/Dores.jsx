function Dores() {
    return (
        <div className="h-auto grid mt-36 pt-36 md:pt-26  items-center text-white gap-5" id="Dores">
            <div className=" w-full">
                <h1 className="my-10 mx-14 text-6xl uppercase justify-self-center font-medium text-center">DESAFIOS DA CRISE ENERGÉTICA</h1>
            </div>
            <div className="grid mx-16 my-10 text-xl grid-cols-1 lg:grid-cols-3 text-center gap-6">
                <div className="md:px-10 ">
                <h3 className="text-2xl text-verde font-bold mb-2">Esgotamento de combustíveis fósseis</h3>
                <p className="text-cinza">O modelo atual de produção e consumo energético ainda depende fortemente de combustíveis fósseis como petróleo, gás e carvão. Este modelo não é sustentável a longo prazo, tanto devido à limitação dos recursos quanto à crescente dificuldade de extração e ao aumento dos custos.</p>
                </div>
                <div className="md:px-10">
                <h3 className="text-2xl text-verde font-bold mb-2">Impactos das mudanças climáticas</h3>
                <p className="text-cinza">O uso excessivo de combustíveis fósseis contribui para o aumento das emissões de CO2, que aceleram o aquecimento global. A previsão de que a temperatura global pode aumentar em até 5,7°C até 2100, se não forem tomadas medidas urgentes, mostra a gravidade do cenário.</p>
                </div>
                <div className="md:px-10">
                <h3 className="text-2xl text-verde font-bold mb-2"> Poluição e saúde</h3>
                <p className="text-cinza">A poluição atmosférica gerada pela queima de combustíveis fósseis tem sérios impactos na saúde pública, com milhões de mortes prematuras associadas a doenças respiratórias e cardiovasculares. Em áreas urbanas de países em desenvolvimento, a falta de acesso à energia limpa também contribui para problemas de saúde, já que muitas famílias ainda dependem de biomassa e carvão​.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mx-7 lg:mx-32 ">
                <div className="p-10 sm:border-r border-b">
                    <h2 className="text-3xl mb-5 font-bold">77%</h2>
                    <p className=" text-cinza">da matriz global é representada por combustíveis fósseis em 2022.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://www.iea.org/reports/world-energy-outlook-2024/executive-summary">IEA</a>
                    </div>
                </div>
                <div className="p-10 md:border-r border-b bg-gradient-to-br from-verdeescuro via-azul to-verdeescuro">
                    <h2 className="text-3xl mb-5 font-bold">59 gigatoneladas</h2>
                    <p className=" text-cinza">de CO₂ foi o valor atingido de emissões globais de gases de efeito estufa em 2019. </p>
                    <div className="mt-2 underline hover:text-verdeescuro">
                    <a href="https://www.wri.org/insights/2023-ipcc-ar6-synthesis-report-climate-change-findings">World Resources</a>
                    </div>
                </div>
                <div className="p-10 sm:border-r border-b">
                    <h2 className="text-3xl mb-5 font-bold">8 milhões</h2>
                    <p className=" text-cinza">de mortes prematuras são causadas pela queima de combustíveis fósseis</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biae087/7808595?login=false">Oxford Academic</a>
                    </div>
                </div>
                <div className="p-10 border-b">
                    <h2 className="text-3xl mb-5 font-bold">775 milhões</h2>
                    <p className=" text-cinza">de pessoas vivem sem eletricidade.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://www.iea.org/reports/world-energy-outlook-2024/executive-summary">IEA</a>
                    </div>
                </div>
                <div className="p-10 border-t sm:border-r">
                    <h2 className="text-3xl mb-5 font-bold">38%</h2>
                    <p className=" text-cinza">é representada por fontes renováveis da capacidade instalada global.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://ourworldindata.org/worlds-energy-problem">Our World in Data</a>
                    </div>
                </div>
                <div className="p-10 border-t md:border-r">
                    <h2 className="text-3xl mb-5 font-bold">3 bilhões</h2>
                    <p className=" text-cinza">de pessoas dependem de combustíveis sólidos, como madeira e carvão vegetal, para cozinhar, expondo famílias a fumaças tóxicas.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biae087/7808595?login=false">Oxford Academic</a>
                    </div>
                </div>
                <div className="p-10 border-t sm:border-r">
                    <h2 className="text-3xl mb-5 font-bold">1 trilhão</h2>
                    <p className=" text-cinza">de dólares é necessário anualmente para acelerar a transição para uma economia de baixo carbono, mas os investimentos atuais não atingem 50% desse valor.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biae087/7808595?login=false">Oxford Academic</a>
                    </div>
                </div>
                <div className="p-10 border-t">
                    <h2 className="text-3xl mb-5 font-bold">1,2ºC</h2>
                    <p className=" text-cinza">foi o valor de aumento da temperatura média global desde 1880. Sem redução drástica de emissões, a temperatura pode aumentar entre 2,7°C e 5°C até 2100​.</p>
                    <div className="mt-2 underline hover:text-azul">
                    <a href="https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biae087/7808595?login=false">Oxford Academic</a>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Dores;