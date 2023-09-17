import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DataCardProps from "../props_interfaces/data_card_props";
import EditDialog from "../misc/edit_dialog";

export default function DataCard({ data, onDelete, onUpdate }: DataCardProps) {
  return (
    <Card className="w-96 flex" style={{ position: "relative" }}>
      <IconButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => {
          onDelete(data['id'])
        }}
      >
        <CloseIcon />
      </IconButton>

      
      <EditDialog key={data['id']} data={data} updateData={onUpdate} />

      <CardContent className="flex-grow">
        <Typography variant="h6" gutterBottom>
          Dados do Registro
        </Typography>
        <div className="flex space-x-4">
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Valor:</strong> {data['valor']}
            </Typography>
          </div>
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Data:</strong> {data['data'].toLocaleDateString()}
            </Typography>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Categoria:</strong> {data['categoria']}
            </Typography>
          </div>
          <div className="flex-grow">
            <Typography variant="body1">
              <strong>Descrição:</strong> {data['descricao']}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

