import { useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from 'xlsx';

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from '../../assets/download.svg'


function Analise() {

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

    const exportToExcel = (rows, fileName) => {
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'date',
            headerName: 'Data',
            type: 'Date',
            width: 150,
            editable: true,
        },
        {
            field: 'produced',
            headerName: 'Produção (kg)',
            type: 'number',
            width: 150,
            editable: true,
        },
        {
            field: 'consumed',
            headerName: 'Consumo (kg)',
            type: 'number',
            width: 150,
            editable: true,
        },
        {
            field: 'efficiency',
            headerName: 'Eficiência (%)',
            type: 'number',
            width: 150,
            editable: false
        },
        {
            field: 'operator',
            headerName: 'Operador',
            width: 180,
            editable: true,
        },
    ];
    
    const rows = [
        { id: 1, date: '2024-11-15', produced: 1000, consumed: 1200, operator: 'Carlos Silva' },
        { id: 2, date: '2024-11-14', produced: 950, consumed: 1100, operator: 'Ana Souza' },
        { id: 3, date: '2024-11-13', produced: 1100, consumed: 1150, operator: 'João Costa' },
        { id: 4, date: '2024-11-12', produced: 870, consumed: 1000, operator: 'Mariana Oliveira' },
        { id: 5, date: '2024-11-11', produced: 920, consumed: 1050, operator: 'Carlos Silva' },
        { id: 6, date: '2024-11-10', produced: 1000, consumed: 1100, operator: 'Ana Souza' },
        { id: 7, date: '2024-11-09', produced: 1050, consumed: 1200, operator: 'João Costa' },
        { id: 8, date: '2024-11-08', produced: 970, consumed: 990, operator: 'Mariana Oliveira' },
        { id: 9, date: '2024-11-07', produced: 880, consumed: 950, operator: 'Carlos Silva' },
    ];
    
    const columns2 = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'period',
            headerName: 'Período',
            width: 150,
            editable: false,
        },
        {
            field: 'averageProduction',
            headerName: 'Produção Média (kg)',
            type: 'number',
            width: 180,
            editable: false,
        },
        {
            field: 'peakProduction',
            headerName: 'Produção Máxima (kg)',
            type: 'number',
            width: 180,
            editable: false,
        },
        {
            field: 'averageEfficiency',
            headerName: 'Eficiência Média (%)',
            type: 'number',
            width: 180,
            editable: false,
        },
        {
            field: 'comparison',
            headerName: 'Comparação com Período Anterior',
            description: 'Diferença percentual em relação ao período anterior.',
            type: 'string',
            width: 250,
            editable: false,
        },
    ];
    
    const rows2 = [
        {
            id: 1,
            period: '01-15 Novembro 2024',
            averageProduction: 1020,
            peakProduction: 1200,
            averageEfficiency: 89.5,
            comparison: '+5% Produção, +2% Eficiência',
        },
        {
            id: 2,
            period: '16-31 Outubro 2024',
            averageProduction: 970,
            peakProduction: 1150,
            averageEfficiency: 87.3,
            comparison: '-3% Produção, -1% Eficiência',
        },
        {
            id: 3,
            period: '01-15 Outubro 2024',
            averageProduction: 1000,
            peakProduction: 1180,
            averageEfficiency: 88.5,
            comparison: 'Base de comparação',
        },
        {
            id: 4,
            period: '16-30 Setembro 2024',
            averageProduction: 950,
            peakProduction: 1120,
            averageEfficiency: 86.7,
            comparison: '-2% Produção, -2% Eficiência',
        },
        {
            id: 5,
            period: '01-15 Setembro 2024',
            averageProduction: 980,
            peakProduction: 1160,
            averageEfficiency: 87.9,
            comparison: '+4% Produção, +1% Eficiência',
        },
    ];
    
    const columns3 = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'period',
            headerName: 'Período',
            width: 150,
            editable: false,
        },
        {
            field: 'avoidedCO2',
            headerName: 'Emissões Evitadas (ton CO2)',
            type: 'number',
            width: 200,
            editable: false,
        },
        {
            field: 'totalAvoided',
            headerName: 'Total Cumulativo (ton CO2)',
            type: 'number',
            width: 220,
            editable: false,
        },
        {
            field: 'comparison',
            headerName: 'Comparação com Período Anterior',
            description: 'Diferença percentual em emissões evitadas.',
            width: 250,
            editable: false,
        },
    ];
    
    const rows3 = [
        {
            id: 1,
            period: '01-15 Novembro 2024',
            avoidedCO2: 250,
            totalAvoided: 3750,
            comparison: '+7% em relação ao período anterior',
        },
        {
            id: 2,
            period: '16-31 Outubro 2024',
            avoidedCO2: 234,
            totalAvoided: 3500,
            comparison: '+5% em relação ao período anterior',
        },
        {
            id: 3,
            period: '01-15 Outubro 2024',
            avoidedCO2: 223,
            totalAvoided: 3266,
            comparison: '+4% em relação ao período anterior',
        },
        {
            id: 4,
            period: '16-30 Setembro 2024',
            avoidedCO2: 214,
            totalAvoided: 3043,
            comparison: '+3% em relação ao período anterior',
        },
        {
            id: 5,
            period: '01-15 Setembro 2024',
            avoidedCO2: 208,
            totalAvoided: 2829,
            comparison: 'Base de comparação',
        },
    ];

    return (
        <InfosDashboar
            title='Análise Histórica e Relatórios'
            description='Visualize em tabelas os hitóricos'
        >
            <ThemeProvider theme={newTheme} >
                <CardHome nome='Histórico de Produção e Consumo' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows, 'Historico_Producao_Consumo')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                            Exportar planilha
                            <img className="right-0" src={download} alt="" />
                        </button>
                        <Box sx={{ height: '50vh', width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
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
                <CardHome nome='Relatórios de Desempenho' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows, 'Relatorios_Desempenho')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                            Exportar planilha
                            <img className="right-0" src={download} alt="" />
                        </button>
                        <Box sx={{ height: '50vh', width: '100%' }}>
                            <DataGrid
                                rows={rows2}
                                columns={columns2}
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
                <CardHome nome='Estatísticas de Economia de Emissões' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows, 'Estatisticas_Economia_Emissoes')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
                            Exportar planilha
                            <img className="right-0" src={download} alt="" />
                        </button>
                        <Box sx={{ height: '50vh', width: '100%' }}>
                            <DataGrid
                                rows={rows3}
                                columns={columns3}
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
        </InfosDashboar>
    );
}

export default Analise;