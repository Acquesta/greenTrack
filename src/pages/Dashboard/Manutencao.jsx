import { useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from 'xlsx';

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from '../../assets/download.svg'

function manutencao() {

    const [colorMode, setColorMode] = useState('dark')

    const newTheme = createTheme({ palette: { mode: colorMode } });

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'Equipamento',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Gravidade',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Descrição',
            description: 'Detalhes sobre o alerta.',
            sortable: false,
            width: 300,
            valueGetter: (value, row) =>
                `Última manutenção em ${row.lastMaintenance || 'N/A'}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Ativo', firstName: 'Eletrolisador A', age: 'Alta', lastMaintenance: '2024-11-01' },
        { id: 2, lastName: 'Inativo', firstName: 'Compressor B', age: 'Média', lastMaintenance: '2024-10-15' },
        { id: 3, lastName: 'Ativo', firstName: 'Tanque C', age: 'Crítica', lastMaintenance: '2024-09-30' },
        { id: 4, lastName: 'Ativo', firstName: 'Bomba D', age: 'Baixa', lastMaintenance: '2024-10-01' },
        { id: 5, lastName: 'Inativo', firstName: 'Sensor E', age: 'Baixa', lastMaintenance: '2024-08-20' },
        { id: 6, lastName: 'Ativo', firstName: 'Compressor F', age: 'Alta', lastMaintenance: '2024-11-10' },
        { id: 7, lastName: 'Inativo', firstName: 'Tanque G', age: 'Média', lastMaintenance: '2024-09-25' },
        { id: 8, lastName: 'Ativo', firstName: 'Sensor H', age: 'Baixa', lastMaintenance: '2024-10-05' },
        { id: 9, lastName: 'Inativo', firstName: 'Eletrolisador I', age: 'Crítica', lastMaintenance: '2024-07-20' },
    ];

    const columns2 = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'Sistema',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Tipo de Falha',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Gravidade',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Descrição',
            description: 'Detalhes sobre o alerta.',
            sortable: false,
            width: 200,
            valueGetter: (row) =>
                `Anomalia detectada: ${row.lastName || 'N/A'}`
        },
        {
            field: 'detectionTime',
            headerName: 'Horário de Detecção',
            type: 'Date',
            width: 180,
            editable: true,
        },
        {
            field: 'operator',
            headerName: 'Operador Responsável',
            width: 180,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status do Alerta',
            width: 150,
            editable: true,
        },
    ];

    const rows2 = [
        { id: 1, firstName: 'Reator A', lastName: 'Aumento de Temperatura', age: 'Alta', fullName: '', detectionTime: '2024-11-16 14:32', operator: 'Carlos Silva', status: 'Aberto' },
        { id: 2, firstName: 'Compressor B', lastName: 'Queda de Pressão', age: 'Média', fullName: '', detectionTime: '2024-11-16 13:20', operator: 'Ana Souza', status: 'Em Análise' },
        { id: 3, firstName: 'Trocador de Calor', lastName: 'Fluxo Irregular', age: 'Alta', fullName: '', detectionTime: '2024-11-15 09:50', operator: 'João Costa', status: 'Resolvido' },
        { id: 4, firstName: 'Sensor de Hidrogênio', lastName: 'Falha de Comunicação', age: 'Baixa', fullName: '', detectionTime: '2024-11-14 18:45', operator: 'Mariana Oliveira', status: 'Aberto' },
        { id: 5, firstName: 'Tanque de Armazenamento', lastName: 'Pressão Elevada', age: 'Crítica', fullName: '', detectionTime: '2024-11-13 11:25', operator: 'Carlos Silva', status: 'Aberto' },
        { id: 6, firstName: 'Linha de Distribuição', lastName: 'Vazamento Detectado', age: 'Crítica', fullName: '', detectionTime: '2024-11-12 16:10', operator: 'Ana Souza', status: 'Resolvido' },
        { id: 7, firstName: 'Eletrolisador C', lastName: 'Sobrecarga Elétrica', age: 'Alta', fullName: '', detectionTime: '2024-11-11 07:30', operator: 'João Costa', status: 'Em Análise' },
        { id: 8, firstName: 'Compressor D', lastName: 'Temperatura Alta', age: 'Média', fullName: '', detectionTime: '2024-11-10 14:00', operator: 'Mariana Oliveira', status: 'Aberto' },
        { id: 9, firstName: 'Bomba E', lastName: 'Ruído Excessivo', age: 'Baixa', fullName: '', detectionTime: '2024-11-09 09:15', operator: 'Carlos Silva', status: 'Resolvido' },
    ];

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

                <CardHome nome='Falhas e Anomalias' height="auto">
                    <div className="px-5">
                        <button onClick={() => exportToExcel(rows2, 'Falhas_Anomalias')} className="bg-verde flex items-center justify-center gap-2 mb-5 px-3 py-2 rounded-lg text-white">
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
            </ThemeProvider>
        </InfosDashboar>
    );
}

export default manutencao;