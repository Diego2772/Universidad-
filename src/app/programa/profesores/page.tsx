import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import ProfesoresComponent from "@/components/programa/profesores/profesores";

const Profesores: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <ProfesoresComponent></ ProfesoresComponent>

      </div>
    </ProgramaLayout>
  );
};

export default Profesores;