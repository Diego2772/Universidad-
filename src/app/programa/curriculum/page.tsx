import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import DiseñoCurricularComponent from "@/components/programa/diseño-curricular/diseñoCurricular";

const diseñoCurricular: React.FC = () => { 
  return (
    <ProgramaLayout>
      {/* Contenido de la página */}
      <div className="mx-25" style={{ marginTop: "30px", textAlign: "justify" }}> </div>

    <DiseñoCurricularComponent></DiseñoCurricularComponent>


    </ProgramaLayout>
  );
};

export default diseñoCurricular;
