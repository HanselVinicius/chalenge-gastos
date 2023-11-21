'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function LoginCard() {
  const router = useRouter()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    if (usuario == 'vinicius' && senha == '1234') {
      router.push('/dashboard');
    } else {
      toast.error('Credenciais Incorretas', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleLogin(); 
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card sx={{ width: '300px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Image src={"/kanji_bushido.png"} height={100} width={100} alt='logoa' />
          </Box>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Entrar
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(event) => {
                setUsuario(event.target.value);
              }}
              label="Usuário"
              color='primary'
              variant="outlined"
              fullWidth
              margin="normal"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
            <TextField
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              label="Senha"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e); 
                }
              }}
            />
          </form>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              color: 'black',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fd6a23',
              },
            }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
