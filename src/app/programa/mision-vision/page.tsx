import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import MisionVisionComponent from "@/components/programa/mision-vision/mision-vision";

const MisionVision: React.FC = () => {
  return (
    <ProgramaLayout> 
      {/* Contenido de la página */}

      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />

    <MisionVisionComponent></MisionVisionComponent>

      </div>
    </ProgramaLayout>
  );
};

export default MisionVision;
