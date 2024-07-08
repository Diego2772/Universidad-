import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import Comite_curricular from "@/components/programa/comite_curricular/comite_curricular";

const Comite: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    < Comite_curricular></ Comite_curricular>

      </div>
    </ProgramaLayout>
  );
};

export default Comite;