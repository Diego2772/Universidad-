import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Software from "@/components/infrainstructura/software_academico/Software";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Software></Software>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;
