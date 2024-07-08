import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Electivas from "@/components/programa/electivas/electivas"
import TablaElectivasTecnicas from "@/components/programa/electivas/tablaElectivasTecnicas"

const MisionVision: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Electivas></Electivas>

      </div>
    </ProgramaLayout>
  );
};

export default MisionVision;
