import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Grupos from "@/components/formacion-investigacion/grupos/grupos";

const Perfiles: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Grupos></Grupos>

      </div>
    </FormacionLayout>
  );
};

export default Perfiles;
