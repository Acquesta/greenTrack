import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import CardHome from "../../components/dashboard/CardHome";

function Sustentabilidade() {
  const [colorMode, setColorMode] = useState("dark");

  const newTheme = createTheme({ palette: { mode: colorMode } });

  return (
    <InfosDashboar
      title="Sustentabilidade"
      description="Quanto seu projeto economiza"
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col md:flex-row gap-5">
          <CardHome nome="Indicadores Ambientais">
            <PieChart
              series={[
                {
                  data: [
                    { "id": 0, "value": 10, "label": "H2V", "color": "green" },
                    { "id": 1, "value": 15, "label": "H2C", "color": 'grey' },
                    { "id": 2, "value": 20, "label": "H2A", "color": 'blue' },
                  ]
                },
              ]}
            />
          </CardHome>
          <CardHome nome="Carbono economizado">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5], color: 'green' },
                { data: [1, 6, 3], color: 'grey' },
              ]}
            />
          </CardHome>
        </div>
        <CardHome nome="Gráficos de Comparação com Outros Combustíveis">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
          />
        </CardHome>
        <CardHome nome="Pontos de carbono">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                valueFormatter: (value) =>
                  value == null ? "NaN" : value.toString(),
              },
              {
                data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
              },
              {
                data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                valueFormatter: (value) =>
                  value == null ? "?" : value.toString(),
              },
            ]}
            height={200}
            margin={{ top: 10, bottom: 20 }}
          />
        </CardHome>
      </ThemeProvider>
    </InfosDashboar>
  );
}

export default Sustentabilidade;
