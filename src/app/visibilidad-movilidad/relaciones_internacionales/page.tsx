import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Relaciones from "@/components/visibilidad-movilidad/relaciones_internacionales/relaciones";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Relaciones></Relaciones>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
