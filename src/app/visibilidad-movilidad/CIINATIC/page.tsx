import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import CIINATIC from "@/components/visibilidad-movilidad/CIINATIC/ciinatic";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <CIINATIC></CIINATIC>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
