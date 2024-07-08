import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import AspectosAcademicos from "@/components/programa/aspectos_academicos/aspectosAcademicos";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <AspectosAcademicos></AspectosAcademicos>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;
