import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function HorizontalCard() {
  return (
    <Card className="w-96 flex">
      <CardContent className="flex-grow">
        <Typography variant="h6" gutterBottom>
          Dados do Registro
        </Typography>
        <div className="flex space-x-4">
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Valor:</strong> R$ 100.00
            </Typography>
          </div>
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Data:</strong> 2023/09/15
            </Typography>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Categoria:</strong> Alimentação
            </Typography>
          </div>
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Descrição:</strong> Almoço no restaurante X
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
