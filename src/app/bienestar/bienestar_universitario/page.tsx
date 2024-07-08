import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Bienestar_universitario from "@/components/bienestar/bienestar_universitario/bienestar_universitario";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Bienestar_universitario></Bienestar_universitario>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
