import { useState } from "react";
import CardHome from "../../components/dashboard/CardHome";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import * as XLSX from "xlsx";

import InfosDashboar from "../../components/dashboard/InfosDashboard";
import { DataGrid } from "@mui/x-data-grid";

import download from "../../assets/download.svg";
import { LineChart } from "@mui/x-charts";
import { BarChart } from '@mui/x-charts/BarChart';

function Previsao() {
  const [colorMode, setColorMode] = useState("dark");

  const newTheme = createTheme({ palette: { mode: colorMode } });

  const exportToExcel = (rows, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Sistema",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Tipo de Falha",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Gravidade",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Descrição",
      description: "Detalhes sobre o alerta e sugestões de otimização.",
      sortable: false,
      width: 200,
      valueGetter: (row) =>
        `Anomalia detectada: ${
          row.lastName || "N/A"
        } - Sugestão de otimização: ${row.optimizationSuggestion || "N/A"}`,
    },
    {
      field: "detectionTime",
      headerName: "Horário de Detecção",
      type: "Date",
      width: 180,
      editable: true,
    },
    {
      field: "operator",
      headerName: "Operador Responsável",
      width: 180,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status do Alerta",
      width: 150,
      editable: true,
    },
    {
      field: "optimizationSuggestion",
      headerName: "Sugestão de Otimização",
      description: "Recomendações para melhorar a eficiência energética.",
      width: 200,
      editable: true,
    },
    {
      field: "energyImpact",
      headerName: "Impacto Energético",
      description:
        "Estimativa do impacto no consumo de energia caso o alerta seja resolvido.",
      width: 180,
      editable: false,
    },
    {
      field: "costReduction",
      headerName: "Redução de Custos Estimada",
      description:
        "Estimativa de redução de custos de energia ao implementar a otimização.",
      width: 180,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      firstName: "Reator A",
      lastName: "Aumento de Temperatura",
      age: "Alta",
      fullName: "",
      detectionTime: "2024-11-16 14:32",
      operator: "Carlos Silva",
      status: "Aberto",
      optimizationSuggestion:
        "Verificar sistema de resfriamento, ajustar parâmetros de operação para reduzir o consumo energético.",
      energyImpact: "Alto consumo devido à temperatura elevada.",
      costReduction: "Potencial redução de 15% no consumo energético.",
    },
    {
      id: 2,
      firstName: "Compressor B",
      lastName: "Queda de Pressão",
      age: "Média",
      fullName: "",
      detectionTime: "2024-11-16 13:20",
      operator: "Ana Souza",
      status: "Em Análise",
      optimizationSuggestion:
        "Recalibrar sistema para otimizar a pressão e reduzir o consumo de energia.",
      energyImpact: "Consumo elevado devido a ineficiência na pressão.",
      costReduction: "Economia de até 10% ao corrigir a pressão.",
    },
    {
      id: 3,
      firstName: "Trocador de Calor",
      lastName: "Fluxo Irregular",
      age: "Alta",
      fullName: "",
      detectionTime: "2024-11-15 09:50",
      operator: "João Costa",
      status: "Resolvido",
      optimizationSuggestion:
        "Revisar e ajustar fluxo de fluido para otimizar troca de calor e reduzir consumo.",
      energyImpact: "Consumo aumentado devido a fluxo irregular.",
      costReduction: "Potencial redução de 20% no consumo energético.",
    },
    {
      id: 4,
      firstName: "Sensor de Hidrogênio",
      lastName: "Falha de Comunicação",
      age: "Baixa",
      fullName: "",
      detectionTime: "2024-11-14 18:45",
      operator: "Mariana Oliveira",
      status: "Aberto",
      optimizationSuggestion:
        "Verificar conexões e recalibrar sensores para evitar falhas no sistema.",
      energyImpact:
        "Baixo impacto direto no consumo, mas falha pode afetar eficiência a longo prazo.",
      costReduction:
        "Melhoria contínua e redução de custos com manutenções corretivas.",
    },
    {
      id: 5,
      firstName: "Tanque de Armazenamento",
      lastName: "Pressão Elevada",
      age: "Crítica",
      fullName: "",
      detectionTime: "2024-11-13 11:25",
      operator: "Carlos Silva",
      status: "Aberto",
      optimizationSuggestion:
        "Reduzir pressão para níveis ideais e otimizar o consumo do sistema.",
      energyImpact: "Consumo elevado devido a pressão acima do necessário.",
      costReduction: "Redução de custos de até 18% com ajuste de pressão.",
    },
    {
      id: 6,
      firstName: "Linha de Distribuição",
      lastName: "Vazamento Detectado",
      age: "Crítica",
      fullName: "",
      detectionTime: "2024-11-12 16:10",
      operator: "Ana Souza",
      status: "Resolvido",
      optimizationSuggestion:
        "Realizar manutenção preventiva para evitar vazamentos e perda de energia.",
      energyImpact: "Vazamento significativo de energia e material.",
      costReduction: "Economia de até 25% ao corrigir vazamentos.",
    },
    {
      id: 7,
      firstName: "Eletrolisador C",
      lastName: "Sobrecarga Elétrica",
      age: "Alta",
      fullName: "",
      detectionTime: "2024-11-11 07:30",
      operator: "João Costa",
      status: "Em Análise",
      optimizationSuggestion:
        "Revisar configuração elétrica e equilibrar carga para evitar sobrecargas.",
      energyImpact: "Alta demanda de energia devido à sobrecarga.",
      costReduction: "Redução de custos com maior estabilidade no consumo.",
    },
    {
      id: 8,
      firstName: "Compressor D",
      lastName: "Temperatura Alta",
      age: "Média",
      fullName: "",
      detectionTime: "2024-11-10 14:00",
      operator: "Mariana Oliveira",
      status: "Aberto",
      optimizationSuggestion:
        "Ajustar termostatos e sistemas de ventilação para reduzir consumo de energia.",
      energyImpact: "Consumo elevado devido à temperatura alta no sistema.",
      costReduction: "Economia de até 12% ao ajustar controle de temperatura.",
    },
    {
      id: 9,
      firstName: "Bomba E",
      lastName: "Ruído Excessivo",
      age: "Baixa",
      fullName: "",
      detectionTime: "2024-11-09 09:15",
      operator: "Carlos Silva",
      status: "Resolvido",
      optimizationSuggestion:
        "Ajustar componentes da bomba para reduzir atrito e melhorar a eficiência.",
      energyImpact:
        "Baixo impacto, mas pode causar maior desgaste e perda de eficiência ao longo do tempo.",
      costReduction: "Redução de custos com menor necessidade de manutenção.",
    },
  ];

  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
      peakDemand: false,
      productionCost: { london: 1000, paris: 950, newYork: 1500, seoul: 400 },
      costOptimization: 'Monitorar consumo e ajustar cargas para reduzir custo de pico.',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Feb',
      peakDemand: false,
      productionCost: { london: 900, paris: 880, newYork: 1400, seoul: 350 },
      costOptimization: 'Analisar horários de pico e usar fontes alternativas de energia.',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
      peakDemand: false,
      productionCost: { london: 950, paris: 900, newYork: 1600, seoul: 420 },
      costOptimization: 'Revisar uso de energia durante os horários de pico e automatizar processos.',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
      peakDemand: false,
      productionCost: { london: 980, paris: 920, newYork: 1500, seoul: 500 },
      costOptimization: 'Investir em equipamentos de maior eficiência energética.',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
      peakDemand: true, // Período de pico
      productionCost: { london: 1300, paris: 1250, newYork: 1800, seoul: 750 },
      costOptimization: 'Implementar sistemas de carga inteligente para reduzir consumo nos picos.',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
      peakDemand: true, // Período de pico
      productionCost: { london: 1350, paris: 1300, newYork: 1900, seoul: 900 },
      costOptimization: 'Aumentar a utilização de fontes renováveis durante os picos de demanda.',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
      peakDemand: true, // Período de pico
      productionCost: { london: 1400, paris: 1350, newYork: 2000, seoul: 1200 },
      costOptimization: 'Ajustar a produção e implementar tecnologias de armazenamento de energia.',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
      peakDemand: true, // Período de pico
      productionCost: { london: 1450, paris: 1400, newYork: 2100, seoul: 1100 },
      costOptimization: 'Revisar contratos de fornecimento de energia para reduzir custos durante picos.',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
      peakDemand: false,
      productionCost: { london: 1000, paris: 950, newYork: 1500, seoul: 400 },
      costOptimization: 'Melhorar sistemas de distribuição para evitar picos de demanda inesperados.',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
      peakDemand: false,
      productionCost: { london: 1100, paris: 1050, newYork: 1600, seoul: 450 },
      costOptimization: 'Fazer ajustes de manutenção preventiva para evitar falhas durante períodos críticos.',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
      peakDemand: false,
      productionCost: { london: 1150, paris: 1100, newYork: 1550, seoul: 400 },
      costOptimization: 'Analisar e otimizar o uso de energia fora dos horários de pico.',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
      peakDemand: false,
      productionCost: { london: 1200, paris: 1150, newYork: 1600, seoul: 350 },
      costOptimization: 'Implementar melhorias nas infraestruturas de distribuição para reduzir perdas de energia.',
    },
  ];
  

  

  const valueFormatter = (value) => {
    return `${value}mm`;
  };

  return (
    <InfosDashboar
      title="Previsão"
      description="Veja possíveis previsões para sua produção"
    >
      <ThemeProvider theme={newTheme}>
        <div className="flex flex-col md:flex-row gap-5">
          <CardHome nome="Modelos Preditivos de Produção">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], label: "Anos" }]}
              series={[
                {
                  data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                  label: "Previsão 1",
                  showMark: ({ index }) => index % 2 === 0,
                },
                {
                  data: [3, 3, 5.5, 8.5, 10, 5, 1, 4, 3, 2],
                  label: "Previsão 2",
                  showMark: ({ index }) => index % 2 === 0,
                },
              ]}
            />
          </CardHome>

          <CardHome
            nome="Simulação de Custo para Períodos de Pico"
            width="100%"
          >
            <BarChart
              dataset={dataset}
              yAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "seoul", label: "Custo de Produção" },
              ]}
              layout="horizontal"
              
            />
          </CardHome>
        </div>

        <CardHome
          nome="Sugestões de Otimização de Consumo Energético"
          height="auto"
          width="100%"
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
      </ThemeProvider>
    </InfosDashboar>
  );
}

export default Previsao;
