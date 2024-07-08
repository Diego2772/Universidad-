import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Extension_component from "@/components/proyeccion-soscial/Extension/Extension";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Extension_component></Extension_component>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
