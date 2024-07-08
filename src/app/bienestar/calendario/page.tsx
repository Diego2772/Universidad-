import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import Calendario from "@/components/bienestar/calendario/calendario";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <Calendario></Calendario>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
 