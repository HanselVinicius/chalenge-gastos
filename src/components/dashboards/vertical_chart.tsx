import { Card, CardContent } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function VerticalChart() {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56],
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
    <CardContent>
     <>
      <h2 className="text-xl font-semibold mb-4">Valor e Data</h2>
       <div className="w-64">
         <Bar data={data} />
       </div>
     </>
     </CardContent>
   </Card>
      
  );
}
