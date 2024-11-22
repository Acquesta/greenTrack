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
                exportToExcel(database?.rows, "Sugestoes_Otimização_Consumo_Energético")
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
