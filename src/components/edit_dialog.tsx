'use client'
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

declare var document: any;


export default function EditDialog() {
    function closeModal() {
        document.getElementById('dialog_1').close()
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

       
  
        <dialog id="dialog_1" className="modal ">
          <div className="modal-card rounded-xl shadow-md p-4 bg-white w-96 mx-auto"> 
            <button className="close-button absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-600" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-content">
              <h2 className="mb-4 text-lg font-semibold">Criar Item</h2>
              <form method="dialog">
                <TextField
                  label="Valor"
                  type="number"
                  variant="outlined"
                  fullWidth
                  className="mb-2"
                />
                <TextField
                  type="date"
                  variant="outlined"
                  fullWidth
                  className="mb-2"
                />
                <TextField
                  label="Descrição"
                  variant="outlined"
                  fullWidth
                  className="mb-2"
                />
                <TextField
                  label="Categoria"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                />
                <Button
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
  
