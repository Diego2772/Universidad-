"use client";

import Image from "next/image";
import { novedadesData } from "./novedades.data";

const SliderNovedades = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {novedadesData.map((novedad) => (
        <div key={novedad.id} className="w-[300px] p-2 relative">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative">
              <Image
                src="https://picsum.photos/1280/720"
                alt={`Imagen de Novedad`}
                className="rounded-t-md"
                layout="responsive"
                width={1000}
                height={800}
              />
              <div className="absolute bottom-0 left-0 bg-red-500 bg-opacity-50 text-white p-2">
                <p className="text-xs">{novedad.fecha}</p>
              </div>
            </div>
            <div className="text-center p-3">
              <h2 className="text-sm font-semibold text-[#687074]">
                {novedad.titulo}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderNovedades;
