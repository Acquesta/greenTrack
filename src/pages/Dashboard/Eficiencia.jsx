import { useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { LineChart, PieChart } from "@mui/x-charts";
import { createTheme, ThemeProvider } from "@mui/material";
import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { getCarbonEmissions } from "../../services/carbonoAPI.js";

function Eficiencia() {
  const [colorMode, setColorMode] = useState("dark");

  const newTheme = createTheme({ palette: { mode: colorMode } });

  const graficoParametro = {
    series: [
      {
        id: "series-1",
        data: [3, 4, 1, 6, 5],
        label: "Hidrogênio Verde",
        highlightScope: {
          highlight: "item",
        },
      },
      {
        id: "series-2",
        data: [4, 3, 1, 5, 8],
        label: "Energia consumida",
        stack: "total",
        highlightScope: {
          highlight: "item",
        },
      },
    ],
    xAxis: [{ data: [0, 3, 6, 9, 12], scaleType: "linear", id: "axis1" }],
  };

  const requestData = {
    type: "electricity", // Tipo de emissão (exemplo: eletricidade, combustível, etc.)
    electricity_unit: "mwh", // Unidade (exemplo: kwh, mwh, etc.)
    electricity_value: 500, // Quantidade de energia consumida
    country: "US", // País
  };

  const BASE_URL = "https://www.carboninterface.com/api/v1";
  const API_KEY = "rwpDAVGTFPlca5pdfatzaQ";

  console.log("Chave da API:", API_KEY);

  try {
    const response = fetch(`${BASE_URL}/estimates`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify(requestData),
    });
    
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }

  return (
    <InfosDashboar
      title="Eficiência"
      description="Acompanhe a eficiência da sua produção"
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col items-center justify-center">
          <CardHome nome="Eficiência Energética" width="100%" height="50vh">
            <LineChart {...graficoParametro} />
          </CardHome>
          <div className="flex gap-5 w-full mt-5">
            <CardHome nome="Estimativa de custo" width="100%" height="50vh">
              <LineChart {...graficoParametro} />
            </CardHome>
            <CardHome nome="Eficiência Energética" width="100%" height="50vh">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "H2V" },
                      { id: 1, value: 15, label: "H2C" },
                      { id: 2, value: 20, label: "H2A" },
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
