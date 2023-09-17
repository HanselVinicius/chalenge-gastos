export default interface DataCardProps {
   
      id:number;
      valor: string;
      data: Date;
      categoria: string;
      descricao: string;
      onDelete: (id)=> void; 
      onUpdate: (id)=>void; 
  }