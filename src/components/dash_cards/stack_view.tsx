import { Card, CardContent, Typography } from "@mui/material";


function format(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  if (isNaN(year)) {
    return 'Não Informado';
  }

  return `${day}/${month}/${year}`;
}


export default function StackView({categoria,data,valor,isCategory}) {



  const formattedDate = data instanceof Date ? data : new Date(data);


  return (
    <div>
      <Card className="w-80 h-20">
        <CardContent className="text-left">
          <Typography variant="body2" className="text-gray-500">
            {isCategory ? categoria.toString() : format(formattedDate)}
          </Typography>
          <Typography variant="body1" className="font-bold mt-1">
            {valor}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
