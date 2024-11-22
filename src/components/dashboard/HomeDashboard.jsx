import CardHome from "../../components/dashboard/CardHome";

import { LineChart } from '@mui/x-charts/LineChart';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";

import aviso from '../../assets/exclamation.svg';
import setaDireita from '../../assets/setaDireita.svg';
import { Gauge } from "@mui/x-charts";
import InfosDashboar from "./InfosDashboard";

function HomeDashboard() {

    const notificacoes = [
        {
            id: 1,
            title: "Aviso de energia",
            description: "Você recebeu uma nova notificação",
            date: "2022-01-01",
        },
        {
            id: 2,
            title: "Nova notificação",
            description: "Você recebeu uma nova notificação",
            date: "2022-01-02",
        },
    ]

    const facilidades = [
        {
            id: 1,
            type: 'default',
            title: 'Produção',
            description: '50%',
            infos: {
                porcentagem: '+5%',
                descricao: 'a mais que mês passado'
            }
        },
        {
            id: 4,
            type: 'default',
            title: 'Produção',
            description: '32%',
            infos: {
                porcentagem: '-2%',
                descricao: 'a menos que mês passado'
            }
        },
        {
            id: 2,
            type: 'gauge',
            title: 'Pressão',
            infos: {
                porcentagem: 50,
                descricao: 'medidor de H2V'
            }
        },
        {
            id: 3,
            type: 'two',
            title: 'Próximo mês',
            infos: {
                porcentagem: '+10%',
                descricao: 'para os próximos 5 meses',
                previsao: '+50%'
            }
        },
    ]

    const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

    const newTheme = createTheme({ palette: { mode: themeMode } });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setThemeMode(JSON.parse(localStorage.getItem('tema')))
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <>
        <InfosDashboar 
            title='Dashboard'
            description='Bem-vindo ao seu dashboard'
            themeMode={themeMode}
        >

                <section className="flex flex-col lg:flex-row gap-5 justify-between">
                    <CardHome nome='Consumo Último mês' themeMode={themeMode}>
                        <ThemeProvider theme={newTheme}>
                            <LineChart
                                yAxis={[{ label: 'mAh' }]}
                                xAxis={[
                                    {
                                        data: ['1', '2', '3', '4', '5', '6', '7'],
                                        label: 'Meses'
                                    }
                                ]}
                                series={[
                                    {
                                        data: [2, 5, 2, 8, 1, 50, 2],
                                            
                                    },
                                ]}

                            />
                        </ThemeProvider>
                    </CardHome>
                    <CardHome nome='Notificações' themeMode={themeMode} >
                        {
                            notificacoes.map((notificacao) => (
                                <article key={notificacao.id} className={`flex justify-evenly items-center bg-[#415572]  rounded-md mx-3 py-3 cursor-pointer`}>
                                    <img src={aviso} alt="icone de aviso branco" />
                                    <h3 className="text-base font-semibold text-white uppercase">{notificacao.title}</h3>
                                    <img src={setaDireita} alt="icone de aviso branco" />
                                </article>
                            ))
                        }
                    </CardHome>
                </section>
                <section className="py-5">
                    <h2 className={`text-${themeMode == 'dark' ? 'white' : 'fundo'} text-3xl font-bold`}>Facilidades</h2>
                    <div className="flex flex-col md:flex-row justify-between gap-4 my-5">
                        {
                            facilidades.map((facilidade) => (
                                <article key={facilidade.id} className={`md:w-1/2 bg-${themeMode == 'dark' ? 'cinzaCard' : 'white'} shadow-md px-3 flex flex-col justify-between gap-2 rounded-lg py-5`}>
                                    <h2 className={`text-${themeMode == 'dark' ? 'white' : 'fundo'} text-xs font-bold lg:text-xl`}>{facilidade.title}</h2>
                                    {
                                        facilidade.type === 'default' ? (
                                            <>
                                                <p className="text-[#1EBF49] text-3xl font-bold lg:text-5xl">{facilidade.description}</p>
                                                <div className={`flex justify-between items-center text-xs text-${themeMode == 'dark' ? 'white' : 'fundo'} font-light lg:text-base`}>
                                                    <p>{facilidade.infos.porcentagem}</p>
                                                    <p className="text-center">{facilidade.infos.descricao}</p>
                                                </div>
                                            </>
                                        ) : facilidade.type === 'gauge' ? (
                                            <div className="mx-auto">
                                                <ThemeProvider theme={newTheme}>
                                                    <Gauge width={100} height={100} value={70} />
                                                </ThemeProvider>
                                                <p className={`text-center text-${themeMode == 'dark' ? 'white' : 'fundo'}`} >{facilidade.infos.descricao}</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={`flex flex-col gap-3 justify-between items-center text-xs text-${themeMode == 'dark' ? 'white' : 'fundo'} font-light lg:text-base`}>
                                                    <p className="w-full text-[#1EBF49] text-3xl font-bold lg:text-5xl">{facilidade.infos.porcentagem}</p>
                                                    <p className="text-center">{facilidade.infos.descricao}</p>
                                                    <p className="w-full text-[#1EBF49] text-end text-3xl font-bold lg:text-5xl">{facilidade.infos.previsao}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                </article>
                            ))
                        }
                    </div>

                </section>
        </InfosDashboar>
        </>
     );
}

export default HomeDashboard;