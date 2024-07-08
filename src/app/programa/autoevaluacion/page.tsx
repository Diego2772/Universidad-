import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import AutoevaluacioComponent from "@/components/programa/autoevaluacion/autoevaluacion";

const Profesores: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <AutoevaluacioComponent></AutoevaluacioComponent>

      </div>
    </ProgramaLayout>
  );
};

export default Profesores;