import { useEffect, useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from 'xlsx';

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from '../../assets/download.svg'
import { useParams } from "react-router-dom";


function Analise() {



    const [themeMode, setThemeMode] = useState(JSON.parse(localStorage.getItem('tema')))

    const newTheme = createTheme({ palette: { mode: themeMode } });

    const [database, setDatabase] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setThemeMode(JSON.parse(localStorage.getItem('tema')))
        }, 2000); 

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        fetch('https://673b43ea339a4ce4451b6ae1.mockapi.io/dashboard/database')
            .then(results => results.json())
            .then(data => setDatabase(data[0].analiseHistorica))
            .catch(error => console.log(error))
            .finally(() => console.log('Requisição feita'))
    }, [])

    console.log(database);

    const exportToExcel = (rows, fileName) => {
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    
    return (
        <InfosDashboar
            title='Análise Histórica e Relatórios'
            description='Visualize em tabelas os hitóricos'
        >
            {
                database.rows &&
                <ThemeProvider theme={newTheme} >
                    <CardHome nome='Histórico de Produção e Consumo' height="auto" themeMode={themeMode}>
                        <div className="px-5">
                            <button onClick={() => exportToExcel(database?.rows, 'Historico_Producao_Consumo')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                                Exportar planilha
                                <img className="right-0" src={download} alt="" />
                            </button>
                            <Box sx={{ height: '50vh', width: '100%' }}>
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
                            </Box>
                        </div>
                    </CardHome>
                    <CardHome nome='Relatórios de Desempenho' height="auto" themeMode={themeMode}>
                        <div className="px-5">
                            <button onClick={() => exportToExcel(database?.rows2, 'Relatorios_Desempenho')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                                Exportar planilha
                                <img className="right-0" src={download} alt="" />
                            </button>
                            <Box sx={{ height: '50vh', width: '100%' }}>
                                <DataGrid
                                    rows={database?.rows2}
                                    columns={database?.columns2}
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
                            </Box>
                        </div>
                    </CardHome>
                    <CardHome nome='Estatísticas de Economia de Emissões' height="auto" themeMode={themeMode}>
                        <div className="px-5">
                            <button onClick={() => exportToExcel(database?.rows3, 'Estatisticas_Economia_Emissoes')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                                Exportar planilha
                                <img className="right-0" src={download} alt="" />
                            </button>
                            <Box sx={{ height: '50vh', width: '100%' }}>
                                <DataGrid
                                    rows={database?.rows3}
                                    columns={database?.columns3}
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
                            </Box>
                        </div>
                    </CardHome>
                </ThemeProvider>
            }
        </InfosDashboar>
    );
}

export default Analise;