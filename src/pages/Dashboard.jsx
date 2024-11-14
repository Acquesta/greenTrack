import CardHome from "../components/dashboard/CardHome";
import MenuDashboard from "../components/dashboard/MenuDashboard";
import MenuHeader from "../components/dashboard/MenuHeader";

import { LineChart } from '@mui/x-charts/LineChart';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

import aviso from '../assets/exclamation.svg'
import setaDireita from '../assets/setaDireita.svg'

function Dashboard() {

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

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
            infos1: {
                porcentagem: '+10%',
                descricao: 'para os próximos 5 meses',
                previsao: '+50%'
            }
        },
    ]

    return (
        <div className="h-[200vh] bg-[#141619]">
            <MenuDashboard />
            <div className="ml-[20vw] pt-6 px-8">
                <MenuHeader />
                <h2 className="text-4xl uppercase font-bold mt-10 text-white">Dashboard</h2>
                <p className="text-[#1EBF49] text-base font-thin mt-2">Bem-vindo ao seu dashboard</p>
                <div className="mt-10 flex flex-col lg:flex-row gap-5 justify-between">
                    <CardHome nome='Consumo Último mês'>
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
                                        // area: true,  
                                        color: '#1EBF49',
                                    },
                                ]}

                            />
                        </ThemeProvider>
                    </CardHome>
                    <CardHome nome='Notificações' >
                        {
                            notificacoes.map((notificacao) => (
                                <div key={notificacao.id} className="flex justify-evenly items-center bg-[#415572] rounded-md mx-3 py-3 cursor-pointer hover:opacity-80">
                                    <img src={aviso} alt="icone de aviso branco" />
                                    <h3 className="text-base font-semibold text-white uppercase">{notificacao.title}</h3>
                                    <img src={setaDireita} alt="icone de aviso branco" />
                                </div>
                            ))
                        }
                    </CardHome>
                </div>
                <div className="mt-5">
                <h2 className="text-white text-3xl font-bold">Facilidades</h2>
                    <div className="flex justify-between gap-4 mt-5">
                        {
                            facilidades.map((facilidade) => (
                                <div key={facilidade.id} className="w-1/2 bg-[#202731] px-3 flex flex-col flex-wrap justify-between gap-2 rounded-lg py-5">
                                    <h2 className="text-white text-xs font-bold lg:text-xl">{facilidade.title}</h2>
                                    {
                                        facilidade.type === 'default' ? (
                                            <>
                                                <p className="text-[#1EBF49] text-3xl font-bold lg:text-5xl">{facilidade.description}</p>
                                                <div className="flex justify-between items-center text-xs text-white font-light lg:text-base">
                                                    <p>{facilidade.infos.porcentagem}</p>
                                                    <p className="text-center">{facilidade.infos.descricao}</p>
                                                </div>
                                            </>
                                        ) : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                   
                </div>
            </div>

        </div>
    );
}

export default Dashboard;