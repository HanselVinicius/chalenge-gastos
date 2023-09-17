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
  const [cardsData, setCardsData] = useState<DataCardProps[]>([]);
  const [filteredData, setFilteredData] = useState<DataCardProps[]>([]); 

  const createData = (newData) => {
    setCardsData(newData);
    setFilteredData(newData); 
  };

  function deleteData(id: number) {
    const updatedData = cardsData.filter((item) => item.id !== id);
    setCardsData(updatedData);
    setFilteredData(updatedData); 
  }

  function updateData(id: number, data) {
    let newList = cardsData.filter((item) => item.id !== id)
    newList.push(data)
    

    setCardsData(newList)
    setFilteredData(newList)
   
  }

  const sortData = (option) => {
    const sorted = [...filteredData]; 
    if (option == 2) {
      sorted.sort((a, b) => parseFloat(b.valor) - parseFloat(a.valor));
    } else if (option == 3) {
      sorted.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor));
    }
    setFilteredData(sorted);
  };

  const applyFilter = (searchValue) => {
    if (searchValue === '') {
      setFilteredData(cardsData); 
    } else {
      const filtered = cardsData.filter((item) =>
        item.categoria.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.valor.toString().includes(searchValue)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <main className='h-screen w-screen bg-white flex flex-col'>
      <NavBar createData={createData} data={cardsData} />

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

      <OrderFilter onSearch={applyFilter} onOrderChange={sortData}/>
      <div className="h-[300px]">
      <DataCardList onDelete={deleteData} onUpdate={updateData}  key={0} data={filteredData}></DataCardList>
      </div>
      

      
    </main>
  );
}
