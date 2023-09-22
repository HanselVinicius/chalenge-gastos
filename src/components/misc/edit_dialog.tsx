'use client'
import React, {  useEffect, useRef, useState } from 'react';
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

declare var document: any;

export default function EditDialog({updateData,data}) {
    const [valor, setValor] = useState(data['valor']);
    const [date, setDate] = useState(data['data'].toISOString().split('T')[0]);
    const [categoria, setCategoria] = useState(data['categoria']);
    const [descricao, setDescricao] = useState(data['descricao']);
    const [errorMessage, setErrorMessage] = useState('');
    const formRef = useRef<HTMLFormElement | null>(null);
 
  
  function closeModal() {
    document.getElementById(data['id']).close();
  }

  function errorNotify(text:string){
    setErrorMessage(text);
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    handleSend(event);
  }

  function handleSend(event) {
    if (valor === '' || descricao === '' || date === '' || categoria === '') {
      errorNotify('Por favor, insira corretamente os dados.');
      return;
    }
  
    if (categoria.length > 20) {
      errorNotify('O nome da categoria não pode ter mais de 20 caracteres.');
      return;
    }
  
    if (descricao.length > 40) {
      errorNotify('A descrição não pode ter mais de 40 caracteres.');
      return;
    }
  
    if (parseFloat(valor) < 0) {
      errorNotify('O valor não pode ser negativo.');
      return;
    }
    
  

    const timezoneOffset = new Date().getTimezoneOffset();
    const adjustedDate = new Date(new Date(date).getTime() + timezoneOffset * 60 * 1000);
  
    const newItem = {
      id: data.id,
      valor: parseFloat(valor),
      data: adjustedDate,
      categoria,
      descricao,
    };
  
    updateData(data.id,newItem);
    event.target.reset();
    closeModal();
  }


  
  return (
    <>
      <IconButton
        onClick={() => document.getElementById(data['id']).showModal()}
        edge="end"
        className='text-black'
        aria-label="adicionar"
      >
        <EditIcon />
      </IconButton>

      <dialog id={data['id']} className="modal rounded-lg">
        <div className="modal-card rounded-xl shadow-md p-4 bg-white w-96 mx-auto">
          <button className="close-button absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-600" onClick={closeModal}>
            ✕
          </button>
          <div className="modal-content">
            <h2 className="mb-4 text-lg font-semibold">Criar Item</h2>
            {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}

            <form ref={formRef} method="dialog" onSubmit={handleSubmit}>
              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setValor(event.target.value)
                }}
                value={valor}
                type="number"
                variant="outlined"
                fullWidth
               
              />
              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setDate(new Date(event.target.value.toString()))
                }}
                 onBlur={(event)=>{
                  setDate(event.target.value.toString())
                }
                } 

                defaultValue={date}
                //value={date}
                type="date"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setDescricao(event.target.value)
                }}
                value={descricao}
                variant="outlined"
                fullWidth
              />

              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setCategoria(event.target.value)
                }}
                value={categoria}
                variant="outlined"
                fullWidth
              />
              <Button 
              
                id="saveButton"
                type="submit"
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#fd6a23',
                  },
                }}
              >
                Salvar
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
