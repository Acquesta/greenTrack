import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BarChart, Gauge, gaugeClasses, LineChart, SparkLineChart } from "@mui/x-charts";
import CardHome from "../../components/dashboard/CardHome";
import { useEffect, useState } from "react";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { data } from "autoprefixer";
import { useParams } from "react-router-dom";

function TempoReal() {

    const { id } = useParams()

    const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

    const newTheme = createTheme({ palette: { mode: themeMode } });

    const [database, setDatabase ] = useState({})

    useEffect(() => {
        fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
        .then(results => results.json())
        .then(data => setDatabase(data[0].tempoReal))
        .catch(error => console.log(error))
        .finally(() => console.log('Requisição feita'))
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setThemeMode(JSON.parse(localStorage.getItem('tema')))
        }, 2000); 

        return () => clearInterval(intervalId);
    }, []);

    let graficoProducao = database.producao;
    let graficoConsumo = database.consumo;
    let graficoPressao = database.pressao;
    let graficoTemperatura = database.temperatura;
    let graficoPureza = database.pureza;
    let graficoRenovavel = database.renovavel;

    console.log(graficoPureza?.valores);
    
   
        return ( 
        <InfosDashboar
            title="Tempo Real"
            description='Visualize seus dados ao vivo'
            themeMode={themeMode}
        >
            <div className="flex flex-col items-center justify-center">
                <CardHome nome='Produção de H2V em litros' height='20vh' themeMode={themeMode}>
                    {
                        graficoProducao && 
                            <Box sx={{ flexGrow: 1 }}>
                                <SparkLineChart
                                    plotType="bar"
                                    data={graficoProducao.data}
                                    showTooltip
                                    showHighlight
                                    xAxis={{
                                        scaleType: 'band',
                                        data: graficoProducao.xAxis
                                    }}
                                />
                            </Box>
                    }
                </CardHome>
                <ThemeProvider theme={newTheme} >
                    <div className="w-full mt-10 flex gap-4 max-lg:flex-col">
                        {
                            graficoConsumo && 
                                <CardHome nome='Consumo de Energia (mAh)' width="100%" themeMode={themeMode}>
                                    <BarChart
                                        xAxis={[{ scaleType: 'band', data: graficoConsumo.meses }]}
                                        series={graficoConsumo.colunas}
                                    />
                                </CardHome>
                        }
                        <CardHome nome='Pressão' width="100%" themeMode={themeMode}>
                            <Gauge
                                value={graficoPressao ? graficoPressao.valor : 0}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={
                                    ({ value, valueMax }) => `${value} / ${valueMax}`
                                }
                            />
                        </CardHome>
                    </div>
                    <div className="w-full mt-10 flex gap-4 max-lg:flex-col">
                        <CardHome nome='Temperatura (C°)' width="100%" themeMode={themeMode}>
                            <Gauge
                                value={graficoTemperatura ? graficoTemperatura.valor : 0}
                                startAngle={-110}
                                endAngle={110}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                        transform: 'translate(0px, 0px)',
                                    },
                                }}
                                text={
                                    ({ value, valueMax }) => `${value} / ${valueMax}`
                                }
                            />
                        </CardHome>
                        {
                            graficoPureza && 
                                <CardHome nome='Pureza do hidrogênio' width="100%" themeMode={themeMode}>
                                    <LineChart
                                        xAxis={[{ data: graficoPureza.xAxis }]}
                                        series={[
                                            {
                                                data: graficoPureza?.valores,
                                                color: '#1EBF49',
                                            },
                                        ]}
                                        />
                                </CardHome>
                        }
                    </div>
                    <div className="mt-10 w-full">
                        {
                            graficoRenovavel && 
                                <CardHome nome='Energia Renovável' themeMode={themeMode}>
                                    <LineChart
                                        xAxis={[{ data: graficoRenovavel.xAxis }]}
                                        series={[
                                            {
                                                data: graficoRenovavel?.valores,
                                                color: '#1EBF49',
                                            },
                                        ]}
                                    />
                                </CardHome>
                        }
                    </div>
                </ThemeProvider>
            </div>
        </InfosDashboar>
    )
    
}

export default TempoReal;