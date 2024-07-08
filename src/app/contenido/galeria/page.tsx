import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import GaleriaCompleta from "@/components/galeria/GaleriaCompleta";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      > 
        <br />

    <GaleriaCompleta></GaleriaCompleta>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
