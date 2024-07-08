import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Movilidad from "@/components/visibilidad-movilidad/movilidad/movilidad";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Movilidad></Movilidad>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
