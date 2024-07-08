import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Plan from "@/components/programa/plan_de_mejoramiento/plan";

const Profesores: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Plan ></ Plan >

      </div>
    </ProgramaLayout>
  );
};

export default Profesores;