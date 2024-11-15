import { Box } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts";

function TempoReal() {
    return (
        <div className="md:ml-[20vw] pt-6 px-8">
            <h2 className="text-4xl uppercase font-bold mt-10 text-white">Tempo Real</h2>
            <p className="text-verde text-base font-thin mt-2">Visualize seus dados ao vivo</p>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                    plotType="bar"
                    data={[1, 4, 2, 5, 7, 2, 4, 6]}
                    height={100}
                    showTooltip
                    showHighlight
                    xAxis={{
                        scaleType: 'band',
                        data: [
                            new Date(2016, 0, 1),
                            new Date(2017, 0, 1),
                            new Date(2018, 0, 1),
                            new Date(2019, 0, 1),
                            new Date(2020, 0, 1),
                            new Date(2021, 0, 1),
                            new Date(2022, 0, 1),
                            new Date(2023, 0, 1),
                        ],
                        valueFormatter: (value) => value.getFullYear(),
                    }}
                />
            </Box>
        </div>
    );
}

export default TempoReal;