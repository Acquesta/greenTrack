import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import CardHome from "../../components/dashboard/CardHome";
import { useParams } from "react-router-dom";

function Sustentabilidade() {

  const { id } = useParams()

  const [colorMode, setColorMode] = useState("dark");

  const newTheme = createTheme({ palette: { mode: colorMode } });

  const [database, setDatabase] = useState({})

  useEffect(() => {
      fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
          .then(results => results.json())
          .then(data => setDatabase(data[id].sustentabilidade))
          .catch(error => console.log(error))
          .finally(() => console.log('Requisição feita'))
  }, [])

  let graficoPies = database.pies;
  let graficoLineChat1 = database.lineChart1;
  let graficoLineChat2 = database.lineChart2;

  console.log(database);

  return (
    <InfosDashboar
      title="Sustentabilidade"
      description="Quanto seu projeto economiza"
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col md:flex-row gap-5">
          <CardHome nome="Indicadores Ambientais">
            {
              graficoPies && 
                <PieChart
                  series={[
                    {
                      data: graficoPies
                    },
                  ]}
                />
            }
          </CardHome>
          <CardHome nome="Carbono economizado">
            {
              database.series && 
                <BarChart
                  xAxis={[
                    { scaleType: "band", data: ["group A", "group B", "group C"] },
                  ]}
                  series={database.series}
                />
            }
          </CardHome>
        </div>
        <CardHome nome="Gráficos de Comparação com Outros Combustíveis">
          {
            graficoLineChat1 &&
              <LineChart
                xAxis={[{ data: graficoLineChat1.xAxis }]}
                series={[
                  {
                    data: graficoLineChat1.series,
                    area: true,
                  },
                ]}
              />
          }
        </CardHome>
        <CardHome nome="Pontos de carbono">
          {
            graficoLineChat2 &&
              <LineChart
                xAxis={[{ data: graficoLineChat2.xAxis }]}
                series={graficoLineChat2.series}
                height={200}
                margin={{ top: 10, bottom: 20 }}
              />
          }
        </CardHome>
      </ThemeProvider>
    </InfosDashboar>
  );
}

export default Sustentabilidade;
