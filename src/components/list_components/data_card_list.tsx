import React from 'react';
import { Alert, Card, CardContent, Typography } from '@mui/material';
import DataCard from './data_card';

export default function DataCardList({ data, onDelete,onUpdate }) {
  if (data.length === 0) {
    return (
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Alert severity="info" icon={false}>
            <Typography variant="h6" gutterBottom>
              Não há dados disponíveis ou o filtro aplicado não bate com nenhum dado.
            </Typography>
            <Typography>
              Por favor, adicione dados ao sistema para visualizar as informações.
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  // por algum motivo o ts não parava de chorar ai eu criei isso para parar de me dar faniquito enquanto não implemento o update
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <DataCard  onUpdate={onUpdate} key={index} data={item} id={0} valor={''} categoria={''} descricao={''} onDelete={onDelete} />
))}
    </div>
  );
}
