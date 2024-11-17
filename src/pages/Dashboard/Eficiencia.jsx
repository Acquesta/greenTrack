import { useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { LineChart, PieChart } from "@mui/x-charts";
import { createTheme, ThemeProvider } from "@mui/material";
import InfosDashboar from "../../components/dashboard/InfosDashboard";

function Eficiencia() {

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

    const lineChartsParams = {
        series: [
            {
                id: 'series-1',
                data: [3, 4, 1, 6, 5],
                label: 'Hidrogênio Verder',
                highlightScope: {
                    highlight: 'item',
                },
            },
            {
                id: 'series-2',
                data: [4, 3, 1, 5, 8],
                label: 'Energia consumida',
                stack: 'total',
                highlightScope: {
                    highlight: 'item',
                },
            },
        ],
        xAxis: [{ data: [0, 3, 6, 9, 12], scaleType: 'linear', id: 'axis1' }],

    };

    return (
        <InfosDashboar 
        title='Eficiência'
        description='Acompanhe a eficiência da sua produção'
        >
            <ThemeProvider theme={newTheme} >
                <div className="flex flex-col items-center justify-center">
                    <CardHome nome='Eficiência Energética' width="100%" height="50vh">
                        <LineChart
                            {...lineChartsParams}
                        />
                    </CardHome>
                    <div className="flex gap-5 w-full mt-5">
                        <CardHome nome='Estimativa de custo' width="100%" height="50vh">
                            <LineChart
                                {...lineChartsParams}
                            />
                        </CardHome>
                        <CardHome nome='Eficiência Energética' width="100%" height="50vh">
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'H2V' },
                                            { id: 1, value: 15, label: 'H2C' },
                                            { id: 2, value: 20, label: 'H2A' },
                                        ],
                                    },
                                ]}
                            />
                        </CardHome>
                    </div>
                </div>
            </ThemeProvider>
        </InfosDashboar>
    );
}

export default Eficiencia;