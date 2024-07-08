import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Proyectos from "@/components/formacion-investigacion/proyectos/proyectos" ;

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Proyectos></Proyectos>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
