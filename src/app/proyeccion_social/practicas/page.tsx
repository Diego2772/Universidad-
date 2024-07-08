import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Practicas from "@/components/proyeccion-soscial/practicas_empresariales/practicas";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Practicas></Practicas>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
