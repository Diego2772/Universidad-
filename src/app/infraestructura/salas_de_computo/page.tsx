import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Salas from "@/components/infrainstructura/salas_de_computo/salas";

const Perfiles: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Salas></Salas>

      </div>
    </ProgramaLayout>
  );
};

export default Perfiles;
