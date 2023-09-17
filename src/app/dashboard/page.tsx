'use client'
import React, { useState } from 'react';
import DashboardPizza from "@/components/dashboards/dashboard_pizza";
import NavBar from "@/components/misc/nav_bar";
import VerticalChart from '@/components/dashboards/vertical_chart';
import DataCardList from '@/components/list_components/data_card_list';
import StackCards from '@/components/dash_cards/stack_cards';
import {  Typography } from '@mui/material';
import OrderFilter from '@/components/misc/order_filter';
import DataCardProps from '@/components/props_interfaces/data_card_props';



export default function DashBoard() {
  const [cardsData, setCardsData] = useState<DataCardProps[]>([

  ]);


  const updateData = (newData) => {
    setCardsData(newData);
  };

  function deleteData(id: number) {
    const index = cardsData.findIndex((item) => item.id === id);
    if (index !== -1) {
      cardsData.splice(index, 1);
      setCardsData([...cardsData]); 
    }
  };
  

  return (
    <main className='h-screen w-screen bg-white flex flex-col'>
      <NavBar updateData={updateData} data={cardsData} />

      <div className='mt-4  justify-center'>
        <div className='w-full px-4'>
        <Typography variant="h4">Resumo de Gastos</Typography>
        </div>
      </div>

      <div className='flex-grow flex flex-wrap justify-center mt-4'>
        <div className='m-3'>
          <DashboardPizza data={cardsData}/>
        </div>

        <div className='m-3'>
          <VerticalChart data={cardsData}/>
        </div>

        <div className='m-3'>
          <StackCards  stacks={cardsData} isCategory={true}/>
        </div>

        <div className='m-3'>
        <StackCards stacks={cardsData} isCategory={false}/>

        </div>

      </div>

      <OrderFilter/>
      <div className="h-[300px]">
      <DataCardList onDelete={deleteData} key={0} data={cardsData}></DataCardList>
      </div>
      

      
    </main>
  );
}
