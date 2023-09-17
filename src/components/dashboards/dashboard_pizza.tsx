import { Card, CardContent, Typography, Alert } from '@mui/material';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import DashboardProps from '../props_interfaces/dashboard_pizza_props';
import 'chart.js/auto';

function consolidateData(data) {
  const consolidatedData = data.reduce((accumulator, item) => {
    const categoria = item.categoria.toLowerCase(); 
    const valor = parseFloat(item.valor);

    if (accumulator[categoria]) {
      accumulator[categoria] += valor;
    } else {
      accumulator[categoria] = valor;
    }

    return accumulator;
  }, {});

  const labels = Object.keys(consolidatedData);
  const values = Object.values(consolidatedData);

  return { labels, values };
}


export default function DashboardPizza({ data }: DashboardProps) {
  const { labels, values } = consolidateData(data);

 
  if (data.length === 0) {
    return (
      <Card sx={{ width: '300px', height: '350px' }}>
        <CardContent >
          <Alert severity="info" icon={false}>
            <Typography variant="h6" gutterBottom>
              Não há dados disponíveis.
            </Typography>
            <Typography>
              Por favor, adicione dados ao sistema para visualizar as informações.
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <Card sx={{ width: '300px', height: '350px' }}>
      <CardContent>
        <>
          <h2 className="text-xl font-semibold mb-4">Gastos por Categoria</h2>
          <div className="w-64">
            <Pie data={chartData} />
          </div>
        </>
      </CardContent>
    </Card>
  );
}
