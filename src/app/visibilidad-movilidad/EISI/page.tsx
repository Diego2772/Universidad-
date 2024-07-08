import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import EISI from "@/components/visibilidad-movilidad/EISI/eisi";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <EISI></EISI>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
