import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Proyeccion from "@/components/proyeccion-soscial/proyeccion_social/proyeccion";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Proyeccion></Proyeccion>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
