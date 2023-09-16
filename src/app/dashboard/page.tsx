'use client'
import React from 'react';
import DashboardPizza from "@/components/dashboards/dashboard_pizza";
import NavBar from "@/components/nav_bar";
import VerticalChart from '@/components/dashboards/vertical_chart';
import DataCard from '@/components/list_components/data_card';

export default function DashBoard() {
  return (
    <main className='h-screen w-screen bg-white flex flex-col'>
      <NavBar />

      <div className='mt-4  justify-center'>
        <div className='w-full px-4'>
          <h1 className='text-2xl font-bold'>Resumo de Gastos</h1>
        </div>
      </div>

      <div className='flex-grow flex flex-wrap justify-center mt-4'>
        <div className='m-3'>
          <DashboardPizza />
        </div>

        <div className='m-3'>
          <VerticalChart />
        </div>

        <div className='m-3'>
          <DashboardPizza />
        </div>

        <div className='m-3'>
          <DashboardPizza />
        </div>
      </div>

      <div className='mt-4  justify-center'>
        <div className='w-full px-4'>
          <h1 className='text-2xl font-bold'>Panorama geral de Gastos</h1>
        </div>
      </div>

    </main>
  );
}
