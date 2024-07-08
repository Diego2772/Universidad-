import React from 'react';

interface VerMasButtonProps {
    onClick?: () => void; // Ahora es opcional
  }
  
  const VerMasButton: React.FC<VerMasButtonProps> = ({ onClick }) => {
    return (
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50" onClick={onClick}>
        Ver más
      </button>
    );
  };

export default VerMasButton;