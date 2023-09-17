import { Card, CardContent } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import DashboardProps from '../props_interfaces/dashboard_pizza_props';




function groupAndSumByMonth(data) {
  const monthMap = {};

  data.forEach((item) => {
    const date = new Date(item.data);
    const month = date.toLocaleDateString('default', { month: 'long' });
    const valor = parseFloat(item.valor);

    if (monthMap[month]) {
      monthMap[month] += valor;
    } else {
      monthMap[month] = valor;
    }
  });

  const labels = Object.keys(monthMap);
  const values = Object.values(monthMap);

  return { labels, values };
}



export default function VerticalChart({ data }:DashboardProps) {
 
  const { labels, values } = groupAndSumByMonth(data);


  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Gastos',
        backgroundColor: 'rgba(0, 102, 204, 0.6)', // Azul
        borderColor: 'rgba(0, 102, 204, 1)', // Azul 
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 165, 0, 0.8)', // Laranja
        hoverBorderColor: 'rgba(255, 165, 0, 1)', // Laranja
        data: values,
      },
    ],
  };
  

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card sx={{ width: '300px', height: '350px' }}>
      <CardContent className="flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-4 text-left">Valor e Data</h2>
        <div className="flex justify-center items-center h-full">
          <div className="w-64">
            <Bar data={chartData} options={options} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
