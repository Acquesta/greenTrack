import { useEffect, useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from 'xlsx';

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from '../../assets/download.svg'
import { useParams } from "react-router-dom";

function manutencao() {

    const { id } = useParams()

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

    const [database, setDatabase ] = useState({})

    useEffect(() => {
        fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
        .then(results => results.json())
        .then(data => setDatabase(data[0].manutencao))
        .catch(error => console.log(error))
        .finally(() => console.log('Requisição feita'))
    }, [])

    let graficoCriticos = database.monitoramentoComponentesCriticos;
    let graficoFalhasAnomalias = database.falhasAnomalias;

    console.log(graficoCriticos);

    const exportToExcel = (rows, fileName) => {
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    return (
        <InfosDashboar
            title='Manutenção'
            description='Acompanhe a eficiência da sua produção'
        >
            <ThemeProvider theme={newTheme} >
                <CardHome nome='Monitoramento de Componentes Críticos' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows, 'Monitoramento_Componentes_Criticos')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                            Exportar planilha
                            <img className="right-0" src={download} alt="" />  
                        </button>
                        <Box sx={{ height: '50vh', width: '100%' }}>
                            {
                                graficoCriticos && 
                                    <DataGrid
                                        rows={graficoCriticos?.rows}
                                        columns={graficoCriticos?.columns}
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

                <CardHome nome='Falhas e Anomalias' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows2, 'Falhas_Anomalias')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                            Exportar planilha
                            <img className="right-0" src={download} alt="" />  
                        </button>
                        <Box sx={{ height: '50vh', width: '100%' }}>
                        {
                                graficoFalhasAnomalias && 
                                    <DataGrid
                                        rows={graficoFalhasAnomalias?.rows}
                                        columns={graficoFalhasAnomalias?.columns}
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

export default manutencao;