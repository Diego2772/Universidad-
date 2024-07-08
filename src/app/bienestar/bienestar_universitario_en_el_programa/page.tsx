import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Bienestar_universitario_programa from "@/components/bienestar/bienestar_universitario_en_el_programa/bienestar_universitario_programa";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Bienestar_universitario_programa></Bienestar_universitario_programa>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
