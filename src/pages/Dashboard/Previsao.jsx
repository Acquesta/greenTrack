import { useEffect, useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from "xlsx";

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from "../../assets/download.svg";
import { LineChart } from "@mui/x-charts";
import { BarChart } from '@mui/x-charts/BarChart';
import { useParams } from "react-router-dom";

function Previsao() {

  const { id } = useParams()

  const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

  const newTheme = createTheme({ palette: { mode: themeMode } });

  const [database, setDatabase] = useState({})

  useEffect(() => {
      fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
          .then(results => results.json())
          .then(data => setDatabase(data[0].previsao))
          .catch(error => console.log(error))
          .finally(() => console.log('Requisição feita'))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
        setThemeMode(JSON.parse(localStorage.getItem('tema')))
    }, 2000); 

    return () => clearInterval(intervalId);
}, []);

  let graficoPrditivos = database.lineChart;
  let dataset = database.dataset;

  console.log(database);

  const exportToExcel = (rows, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
  //   {
  //     london: 59,
  //     paris: 57,
  //     newYork: 86,
  //     seoul: 21,
  //     month: 'Jan',
  //     peakDemand: false,
  //     productionCost: { london: 1000, paris: 950, newYork: 1500, seoul: 400 },
  //     costOptimization: 'Monitorar consumo e ajustar cargas para reduzir custo de pico.',
  //   },
  //   {
  //     london: 50,
  //     paris: 52,
  //     newYork: 78,
  //     seoul: 28,
  //     month: 'Feb',
  //     peakDemand: false,
  //     productionCost: { london: 900, paris: 880, newYork: 1400, seoul: 350 },
  //     costOptimization: 'Analisar horários de pico e usar fontes alternativas de energia.',
  //   },
  //   {
  //     london: 47,
  //     paris: 53,
  //     newYork: 106,
  //     seoul: 41,
  //     month: 'Mar',
  //     peakDemand: false,
  //     productionCost: { london: 950, paris: 900, newYork: 1600, seoul: 420 },
  //     costOptimization: 'Revisar uso de energia durante os horários de pico e automatizar processos.',
  //   },
  //   {
  //     london: 54,
  //     paris: 56,
  //     newYork: 92,
  //     seoul: 73,
  //     month: 'Apr',
  //     peakDemand: false,
  //     productionCost: { london: 980, paris: 920, newYork: 1500, seoul: 500 },
  //     costOptimization: 'Investir em equipamentos de maior eficiência energética.',
  //   },
  //   {
  //     london: 57,
  //     paris: 69,
  //     newYork: 92,
  //     seoul: 99,
  //     month: 'May',
  //     peakDemand: true, // Período de pico
  //     productionCost: { london: 1300, paris: 1250, newYork: 1800, seoul: 750 },
  //     costOptimization: 'Implementar sistemas de carga inteligente para reduzir consumo nos picos.',
  //   },
  //   {
  //     london: 60,
  //     paris: 63,
  //     newYork: 103,
  //     seoul: 144,
  //     month: 'June',
  //     peakDemand: true, // Período de pico
  //     productionCost: { london: 1350, paris: 1300, newYork: 1900, seoul: 900 },
  //     costOptimization: 'Aumentar a utilização de fontes renováveis durante os picos de demanda.',
  //   },
  //   {
  //     london: 59,
  //     paris: 60,
  //     newYork: 105,
  //     seoul: 319,
  //     month: 'July',
  //     peakDemand: true, // Período de pico
  //     productionCost: { london: 1400, paris: 1350, newYork: 2000, seoul: 1200 },
  //     costOptimization: 'Ajustar a produção e implementar tecnologias de armazenamento de energia.',
  //   },
  //   {
  //     london: 65,
  //     paris: 60,
  //     newYork: 106,
  //     seoul: 249,
  //     month: 'Aug',
  //     peakDemand: true, // Período de pico
  //     productionCost: { london: 1450, paris: 1400, newYork: 2100, seoul: 1100 },
  //     costOptimization: 'Revisar contratos de fornecimento de energia para reduzir custos durante picos.',
  //   },
  //   {
  //     london: 51,
  //     paris: 51,
  //     newYork: 95,
  //     seoul: 131,
  //     month: 'Sept',
  //     peakDemand: false,
  //     productionCost: { london: 1000, paris: 950, newYork: 1500, seoul: 400 },
  //     costOptimization: 'Melhorar sistemas de distribuição para evitar picos de demanda inesperados.',
  //   },
  //   {
  //     london: 60,
  //     paris: 65,
  //     newYork: 97,
  //     seoul: 55,
  //     month: 'Oct',
  //     peakDemand: false,
  //     productionCost: { london: 1100, paris: 1050, newYork: 1600, seoul: 450 },
  //     costOptimization: 'Fazer ajustes de manutenção preventiva para evitar falhas durante períodos críticos.',
  //   },
  //   {
  //     london: 67,
  //     paris: 64,
  //     newYork: 76,
  //     seoul: 48,
  //     month: 'Nov',
  //     peakDemand: false,
  //     productionCost: { london: 1150, paris: 1100, newYork: 1550, seoul: 400 },
  //     costOptimization: 'Analisar e otimizar o uso de energia fora dos horários de pico.',
  //   },
  //   {
  //     london: 61,
  //     paris: 70,
  //     newYork: 103,
  //     seoul: 25,
  //     month: 'Dec',
  //     peakDemand: false,
  //     productionCost: { london: 1200, paris: 1150, newYork: 1600, seoul: 350 },
  //     costOptimization: 'Implementar melhorias nas infraestruturas de distribuição para reduzir perdas de energia.',
  //   },
  // ];

  return (
    <InfosDashboar
      title="Previsão"
      description="Veja possíveis previsões para sua produção"
      themeMode={themeMode}
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col md:flex-row gap-5">
          <CardHome nome="Modelos Preditivos de Produção" themeMode={themeMode}>
            {
              graficoPrditivos && 
                <LineChart
                  xAxis={[{ data: graficoPrditivos.xAxis, label: "Anos" }]}
                  series={graficoPrditivos.series}
                />
            }
          </CardHome>

          <CardHome
            nome="Simulação de Custo para Períodos de Pico"
            width="100%"
            themeMode={themeMode}
          >
            {
              dataset && 
                <BarChart
                  dataset={dataset}
                  yAxis={[{ scaleType: "band", dataKey: "month" }]}
                  series={[
                    { dataKey: "seoul", label: "Custo de Produção" },
                  ]}
                  layout="horizontal"
                  
                />
            }
          </CardHome>
        </div>

        <CardHome
          nome="Sugestões de Otimização de Consumo Energético"
          height="auto"
          width="100%"
          themeMode={themeMode}
        >
          <div className="px-5">
            <button
              onClick={() =>
                exportToExcel(rows, "Sugestoes_Otimização_Consumo_Energético")
              }
              className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white"
            >
              Exportar planilha
              <img className="right-0" src={download} alt="" />
            </button>
            <Box sx={{ height: "50vh", width: "100%" }}>
              {
                database.rows && 
                  <DataGrid
                    rows={database?.rows}
                    columns={database?.columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 6,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                  />
              }
            </Box>
          </div>
        </CardHome>
      </ThemeProvider>
    </InfosDashboar>
  );
}

export default Previsao;
