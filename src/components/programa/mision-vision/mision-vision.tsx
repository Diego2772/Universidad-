import { FaRocket } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";


export default function MisionVisionComponent() {
  return (
    <>  

<div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg animate-fadeIn">
        <div className="bg-gray-100 rounded-full p-3 mb-4">
        <FaRocket className="w-12 h-12 text-primary text-red-500" />  
        </div>
        <h3 className="text-xl font-bold mb-2">Nuestra Misión</h3>
        <p className="text-gray-500 dark:text-gray-400 text-justify">
        El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
        </p>
      </div>
      <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg animate-fadeIn">
        <div className="bg-gray-100 rounded-full p-3 mb-4">
        <FaBullseye className="w-12 h-12 text-primary text-red-500" />  
        </div>
        <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
        <p className="text-gray-500 dark:text-gray-400 text-justify">
        El Programa de Ingeniería Electromecánica de la UFPS está
                comprometido en la formación integral de profesionales
                competentes en el campo de la ingeniería, caracterizados por una
                sólida fundamentación en las áreas de, control y automatización
                de procesos, sistemas de conversión, distribución y uso final de
                la energía, enmarcado en un Proyecto Educativo fundamentado en
                el mejoramiento continuo de los procesos misionales; basados en
                los principios de excelencia académica, con responsabilidad y
                compromiso con los procesos de transformación de la región y del
                país ; contando con docentes de calidad y con una adecuada
                infraestructura física y tecnológica.
        </p>
      </div>
    </div>

      
</>


);
}