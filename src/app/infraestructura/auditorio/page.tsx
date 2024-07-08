import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Auditorio from "@/components/infrainstructura/auditorio/Auditorio";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Auditorio></Auditorio>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;
