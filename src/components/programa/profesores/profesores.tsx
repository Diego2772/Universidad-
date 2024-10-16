"use client"
import { useState } from 'react';

interface TeacherCardProps {
  name: string;
  type: string;
  imageUrl: string;
  info: string;
  correo: string;
}

export default function TeacherCard({ name, type, imageUrl, info, correo }: TeacherCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="w-80 h-96 perspective cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Cara frontal */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white shadow-card rounded-lg flex flex-col items-center justify-center w-full h-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{type}</p>
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
          <div className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center w-full h-full">
            {/* Aquí usamos dangerouslySetInnerHTML para procesar los saltos de línea */}
            <p className="text-center" dangerouslySetInnerHTML={{ __html: info }} />
            <p className="text-center">{correo}</p>
          </div>
        </div>

      </div>
    </div>
  );
}



