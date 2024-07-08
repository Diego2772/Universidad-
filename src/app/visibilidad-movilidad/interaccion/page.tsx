import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Interaccion from "@/components/visibilidad-movilidad/interaccion/interaccion";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Interaccion></Interaccion>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
