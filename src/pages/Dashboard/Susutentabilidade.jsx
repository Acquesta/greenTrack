import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import CardHome from "../../components/dashboard/CardHome";
import { useParams } from "react-router-dom";

function Sustentabilidade() {

  const { id } = useParams()

  const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

  const newTheme = createTheme({ palette: { mode: themeMode } });

  const [database, setDatabase] = useState({})

  useEffect(() => {
      fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
          .then(results => results.json())
          .then(data => setDatabase(data[0].sustentabilidade))
          .catch(error => console.log(error))
          .finally(() => console.log('Requisição feita'))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
        setThemeMode(JSON.parse(localStorage.getItem('tema')))
    }, 2000); 

    return () => clearInterval(intervalId);
}, []);

  let graficoPies = database.pies;
  let graficoLineChat1 = database.lineChart1;
  let graficoLineChat2 = database.lineChart2;

  console.log(database);

  return (
    <InfosDashboar
      title="Sustentabilidade"
      description="Quanto seu projeto economiza"
      themeMode={themeMode}
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col md:flex-row gap-5">
          <CardHome nome="Indicadores Ambientais" themeMode={themeMode}>
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
          <CardHome nome="Carbono economizado" themeMode={themeMode}>
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
        <CardHome nome="Gráficos de Comparação com Outros Combustíveis" themeMode={themeMode}>
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
        <CardHome nome="Pontos de carbono" themeMode={themeMode}>
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
