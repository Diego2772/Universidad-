import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Contacto from "@/components/bienestar/contacto/Contacto";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Contacto></Contacto>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
 