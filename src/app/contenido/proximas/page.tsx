import React from "react";
import FormacionLayout from "@/app/layouts/formacionLayout";
import ProximasCompleta from "@/components/proximas/ProximasCompletas";

const Extension: React.FC = () => {
  return (
    <FormacionLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <ProximasCompleta></ProximasCompleta>

      </div>
    </FormacionLayout>
  );
};

export default Extension;
