import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BarChart, Gauge, gaugeClasses, LineChart, SparkLineChart } from "@mui/x-charts";
import CardHome from "../../components/dashboard/CardHome";
import { useState } from "react";
import InfosDashboar from "../../components/dashboard/InfosDashboard";

function TempoReal() {

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

    return (
        <InfosDashboar
            title="Tempo Real"
            description='Visualize seus dados ao vivo'
        >
            <div className="flex flex-col items-center justify-center">
                <CardHome nome='Produção de H2V em litros' height='20vh'>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[0.2, 0.4, 0.5, 1.0, 1.1, 1.5, 1.6, 2.0]}
                            showTooltip
                            showHighlight
                            xAxis={{
                                scaleType: 'band',
                                data: [
                                    '01:00',
                                    '02:00',
                                    '03:00',
                                    '04:00',
                                    '05:00',
                                    '06:00',
                                    '07:00',
                                    '08:00',
                                ],
                            }}
                        />
                    </Box>
                </CardHome>
                <ThemeProvider theme={newTheme} >
                    <div className="w-full mt-10 flex gap-4 max-lg:flex-col">
                        <CardHome nome='Consumo de Energia (mAh)' width="100%">
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['Setembro', 'Outubro', 'Novembro'] }]}
                                series={[{ data: [4, 3, 5], label: '1° semana' }, { data: [1, 6, 3], label: '2° semana' }, { data: [2, 5], label: '3° semana' }]}

                            />
                        </CardHome>
                        <CardHome nome='Pressão' width="100%">
                            <Gauge
                                value={75}
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
                        <CardHome nome='Temperatura (C°)' width="100%">
                            <Gauge
                                value={30}
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
                        <CardHome nome='Pureza do hidrogênio' width="100%">
                            <LineChart
                                xAxis={[{ data: [10, 20, 30, 50, 80, 100] }]}
                                series={[
                                    {
                                        data: [20, 50.5, 20, 80.5, 10.5, 50],
                                        color: '#1EBF49',
                                    },
                                ]}
                            />
                        </CardHome>
                    </div>
                    <div className="mt-10 w-full">
                        <CardHome nome='Energia Renovável'>
                            <LineChart
                                xAxis={[{ data: [10, 20, 30, 50, 80, 100] }]}
                                series={[
                                    {
                                        data: [20, 50.5, 20, 80.5, 10.5, 50],
                                        color: '#1EBF49',
                                    },
                                ]}
                            />
                        </CardHome>
                    </div>
                </ThemeProvider>
            </div>
        </InfosDashboar>
    );
}

export default TempoReal;