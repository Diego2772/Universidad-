import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Convocatorias from "@/components/visibilidad-movilidad/convocatorias/convocatorias";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Convocatorias></Convocatorias>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
