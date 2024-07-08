import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Hablemos from "@/components/formacion-investigacion/hablemos/hablemos";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Hablemos></Hablemos>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
