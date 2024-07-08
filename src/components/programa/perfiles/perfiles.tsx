import { FaRocket } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";

export default function PerfilesComponent() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mx-4">
        <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg animate-fadeIn mb-6">
          <div className="bg-gray-100 rounded-full p-3 mb-4">
            <FaRocket className="w-12 h-12 text-primary text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Perfil de ingreso</h3>
          <p className="text-gray-500 dark:text-gray-400 text-justify">
            El aspirante a Ingresar al programa de Ingeniería Electromecánica de
            la Universidad Francisco de Paula Santander, debe contar con
            educación media con título de bachiller, la selección se realiza con
            base en los resultados de las pruebas saber 11, debe tener:
          </p>
          <ul className="text-gray-500 dark:text-gray-400 text-justify">
            <li>
              1. Buen dominio de las matemáticas y de las ciencias aplicadas
            </li>
            <li>2. Alta capacidad interpretativa y de análisis</li>
            <li>3. Uso de tecnologías de la información y la comunicación</li>
            <li>4. Tener la formación del idioma inglés a nivel básico</li>
            <li>
              5. Capacidad propositiva frente a problemáticas del sector
              productivo
            </li>
            <li>
              6. Debe tener interés en contribuir en el desarrollo sostenible de
              la sociedad mediante la implementación de nuevas tecnologías
            </li>
          </ul>
        </div>
        <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg animate-fadeIn mb-6">
          <div className="bg-gray-100 rounded-full p-3 mb-4">
            <LuBrainCircuit className="w-12 h-12 text-primary text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Perfil de egreso</h3>
          <p className="text-gray-500 dark:text-gray-400 text-justify">
            El Ingeniero Electromecánico de la Universidad Francisco de Paula
            Santander, diseña e implementa sistemas y dispositivos eléctricos y
            mecánicos, proponiendo soluciones tecnológicas innovadoras a los
            sectores productivos, utilizando estrategias para el uso racional y
            eficiente de la energía, apegado a las normas nacionales e
            internacionales vigentes, Desarrolla estrategias de control y
            automatización de procesos presentes en la industria.
          </p>
          <br />
          <p className="text-gray-500 dark:text-gray-400 text-justify">
            Es un profesional con capacidad para analizar y solucionar problemas
            relacionados con el diseño, montaje, mantenimiento y control de
            dispositivos y procesos de conversión de energía ,requeridos para el
            desarrollo regional y nacional, soportado por un espíritu crítico y
            reflexivo en un marco de libertad de pensamiento, tolerancia y
            pluralismo ideológico y autonomía de aprendizaje que le permita
            estar actualizado, para mantener altos niveles de competitividad;
            mediante su activa participación en grupos interdisciplinarios, con
            objetivos y fines definidos en el campo de su ejercicio profesional
            y de interés particular.
          </p>
        </div>
      </div>
    </>
  );
}
