import { useEffect, useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { LineChart, PieChart } from "@mui/x-charts";
import { createTheme, ThemeProvider } from "@mui/material";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { useParams } from "react-router-dom";

function Eficiencia() {

  const { id } = useParams()

  const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

  const newTheme = createTheme({ palette: { mode: themeMode } });

  const [database, setDatabase ] = useState({})

  useEffect(() => {
      fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
      .then(results => results.json())
      .then(data => setDatabase(data[0].eficiencia))
      .catch(error => console.log(error))
      .finally(() => console.log('Requisição feita'))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
        setThemeMode(JSON.parse(localStorage.getItem('tema')))
    }, 2000); 

    return () => clearInterval(intervalId);
}, []);

  let graficoParametros= database.graficoParametros;
  let graficoestimativas = database.estimativas;
  let graficodistribuicao = database.distribuicao;

  const estimativas = {
    series: [
      {
        id: "series-1",
        data: graficoestimativas?.custo,
        label: "Custo",
        highlightScope: {
          highlight: "item",
        },
      },
      {
        id: "series-2",
        data: graficoestimativas?.energia,
        label: "Energia consumida",
        stack: "total",
        highlightScope: {
          highlight: "item",
        },
      },
    ],
    xAxis: [{ data: [0, 3, 6, 9, 12], scaleType: "linear", id: "axis1" }],
  };

  return (
    <InfosDashboar
      title="Eficiência"
      description="Acompanhe a eficiência da sua produção"
      themeMode={themeMode}
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col items-center justify-center">
          <CardHome nome="Eficiência Energética" width="100%" height="50vh" themeMode={themeMode}>
            {
              graficoParametros && 
                <LineChart {...graficoParametros} />
            }
          </CardHome>
          <div className="flex gap-5 w-full mt-5">
            <CardHome nome="Estimativa de custo" width="100%" height="50vh" themeMode={themeMode}>
            {
              graficoParametros && 
                <LineChart {...estimativas} />
            }
            </CardHome>
            <CardHome nome="Eficiência Energética" width="100%" height="50vh" themeMode={themeMode}>
              {
                graficodistribuicao &&
                  <PieChart
                    series={[
                      {
                        data: graficodistribuicao.pieChart,
                      },
                    ]}
                  />
              }
            </CardHome>
          </div>
        </div>
      </ThemeProvider>
    </InfosDashboar>
  );
}

export default Eficiencia;
