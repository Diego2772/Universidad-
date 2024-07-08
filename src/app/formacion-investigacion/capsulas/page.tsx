import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Capsulas from "@/components/formacion-investigacion/capsulas/capsulas";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Capsulas></Capsulas>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
