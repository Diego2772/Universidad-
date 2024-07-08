import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import PropositoPrograma from "@/components/programa/proposito/Proposito";

const Proposito: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}
    
    <PropositoPrograma ></PropositoPrograma>

 
    </ProgramaLayout>
  );
};

export default Proposito;
