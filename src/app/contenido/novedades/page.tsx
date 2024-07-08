import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import NovedadesCompleta from "@/components/novedades/NovedadesCompleta";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <NovedadesCompleta></NovedadesCompleta>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
