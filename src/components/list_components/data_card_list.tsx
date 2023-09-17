import React from 'react';
import DataCard from './data_card';
import { Alert, Card, CardContent, Typography } from '@mui/material';

export default function DataCardList({ data, onDelete }) {
  if (data.length === 0) {
    return (
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Alert severity="info" icon={false}>
            <Typography variant="h6" gutterBottom>
              Não há dados disponíveis.
            </Typography>
            <Typography>
              Por favor, adicione dados ao sistema para visualizar as informações.
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <DataCard key={index} data={item} id={0} valor={''} categoria={''} descricao={''} onDelete={onDelete} />
      ))}
    </div>
  );
}
