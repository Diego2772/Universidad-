import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import  Oferta from "@/components/bienestar/oferta_laboral/Oferta";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    < Oferta></ Oferta>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
