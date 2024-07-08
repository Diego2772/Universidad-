import React from 'react';
import { GrGrow } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi"
import { LuBrainCircuit } from "react-icons/lu";
import { CiFlag1 } from "react-icons/ci";
import { FaHelmetSafety } from "react-icons/fa6";




const PropositosIntelectuales = () => {
  return (

    <>
      <section className="w-full py-12 md:py-16">
        <div className="container grid gap-6 px-4 md:px-6">
       
          <div className="bg-white rounded-lg shadow-lg  p-6 hover:shadow-2xl transition-shadow duration-300">
           
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <li className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                <GrGrow  className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                  
                 
                </div>
              
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Hacer un uso correcto y adecuado de las técnicas, habilidades y herramientas actualizadas en el desarrollo de la práctica de ingeniería. 
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
             
                < LuBrainCircuit className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>

                </div> 
             
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Motivar la creación de grupos de investigación dentro y fuera de la institución que traten temas de relevancia para mejorar las condiciones dignas del país a nivel local, regional y nacional.
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                <CiFlag1   className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                </div>
               
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Formar profesionales en el área de ingeniería electromecánica con capacidad de experimentar, analizar e interpretar datos. 
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                <FaHelmetSafety className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-center">
                Divulgar los conocimientos desarrollados dentro del presente programa curricular por medio de conferencias, encuentros, seminarios o grupos de investigación. 
                </p>
              </li>        
            
            </ul>
          </div>
        </div>
      </section>
    
   
  
   
   
   
    </>
  );
};

export default PropositosIntelectuales;