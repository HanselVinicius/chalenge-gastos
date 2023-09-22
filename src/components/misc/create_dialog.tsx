import React, {  useRef, useState } from 'react';
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

declare var document: any;

export default function CreateDialog({createData,data}) {
  const [valor, setValor] = useState('');
  const [date, setDate] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const formRef = useRef<HTMLFormElement | null>(null);


 

  function closeModal() {
    setValor('');
    setCategoria('');
    setDate('')
    setDescricao('');
    setErrorMessage('');
    document.getElementById('dialog_1').close();
    if(formRef.current != null){
    formRef.current.reset();
    }
  }

  function errorNotify(text:string){
    setErrorMessage(text);
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    handleSend(event);
  }

  function handleSend(event) {
    console.log(valor)
    console.log(descricao)
    console.log(categoria)

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
      id: data.length + 1,
      valor: parseFloat(valor),
      data: adjustedDate,
      categoria,
      descricao,
    };
  
    const newDataSet = [...data, newItem];
    createData(newDataSet);
    event.target.reset();
    closeModal();
  }
  
  return (
    <>
      <IconButton
        onClick={() => document.getElementById('dialog_1').showModal()}
        edge="end"
        className='text-black'
        aria-label="adicionar"
      >
        <EditIcon />
      </IconButton>

      <dialog id="dialog_1" className="modal rounded-lg">
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
                label='Valor'
                type="number"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setDate(event.target.value.toString())
                }}
                onBlur={(event)=>{
                  setDate(event.target.value.toString())
                }
                }
                type="date"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setDescricao(event.target.value)
                }}
                label="Descrição"
                variant="outlined"
                fullWidth
              />

              <TextField
                sx={{marginBottom:2}}
                onChange={(event) => {
                  setCategoria(event.target.value)
                }}
                label="Categoria"
                variant="outlined"
                fullWidth
              />
              <Button
                id="saveButton"
                type="submit"
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: '#1976D2',
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
