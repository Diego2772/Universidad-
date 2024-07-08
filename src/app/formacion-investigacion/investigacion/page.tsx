import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import InvestigacionEnElPrograma from "@/components/formacion-investigacion/investigacion/investigacion";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <InvestigacionEnElPrograma></InvestigacionEnElPrograma>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
