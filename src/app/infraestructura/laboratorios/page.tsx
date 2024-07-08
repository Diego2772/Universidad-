import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Laboratorios from "@/components/infrainstructura/laboratorios/laboratorios";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Laboratorios></Laboratorios>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;
