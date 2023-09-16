'use client'
import React from 'react';
import 'chart.js/auto';

import { Pie,} from 'react-chartjs-2';
import { Card, CardContent } from '@mui/material';


export default function DashboardPizza() {
  
  const data = {
    labels: ['Lazer', 'Necessidades', 'Mercado', 'Qualquer', 'Imprevistos'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (

    
      <Card sx={{  width: '300px', height: '350px' }}>
       <CardContent>
        <>
         <h2 className="text-xl font-semibold mb-4">Gastos por Categoria</h2>
          <div className="w-64">
            <Pie data={data} />
          </div>
        </>
        </CardContent>
      </Card>
  );
}
