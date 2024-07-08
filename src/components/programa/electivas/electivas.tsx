
import { VscRobot } from "react-icons/vsc";



export default function Electivas() {
  return (
    <>  

<div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg animate-fadeIn">
        <div className="bg-gray-100 rounded-full p-3 mb-4">
        <VscRobot  className="w-12 h-12 text-primary text-red-500" />  
        </div>
        <h3 className="text-xl font-bold mb-2">Cursos electivos</h3>
        <p className="text-gray-500 dark:text-gray-400 text-justify">
        Con el objeto de fortalecer las líneas de profundización y teniendo en cuenta las necesidades identificadas en el sector productivo, y los avances tecnológicos, el programa de ingeniería electromecánica oferta en su malla curricular 4 cursos electivos, que les permitirán a los estudiantes profundizar su aprendizaje. La oferta de electivas se muestra 
        </p>
      </div>
     
    </div>

      
    </>
 

);
}