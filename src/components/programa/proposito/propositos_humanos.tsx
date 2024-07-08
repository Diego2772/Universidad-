import React from 'react';
import { GrGrow } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi"



const PropositoHumano = () => {
  return (

    <>
      <section className="w-full py-12 md:py-16">
        <div className="container grid gap-6 px-4 md:px-6">
       
          <div className="bg-white rounded-lg shadow-lg  p-6 hover:shadow-2xl transition-shadow duration-300">
           
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12 mb-4">
                <GrGrow  className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                  
                 
                </div>
                <h4 className="text-lg font-semibold mb-2">Formación de profesionales</h4>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Formar profesionales en el ejercicio práctico de los deberes y derechos y de las relaciones interpersonales
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
             
                <FaRegLightbulb  className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>

                </div> 
                <h4 className="text-lg font-semibold mb-2">Comprensión y apropiación</h4>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Comprender los aspectos y las responsabilidades profesionales, éticas, sociales, históricas, ambientales, económicas y jurídicas, y la apropiación de éstas.
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                <FaPersonCircleCheck   className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                </div>
                <h4 className="text-lg font-semibold mb-2">Motivación, ética y responsabilidad</h4>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Incentivar el desarrollo de actividades profesionales con un alto sentido ético y de responsabilidad por el trabajo.
                </p>
              </li>
              <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200 
               transition-colors duration-300">
                <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                <GiHumanPyramid className='w-6 h-6'  style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}/>
                </div>
                <h4 className="text-lg font-semibold mb-2">Valores</h4>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                Formar valores fundamentales para la convivencia y construcción de una sociedad más justa.
                </p>
              </li>        
            
            </ul>
          </div>
        </div>
      </section>
    
   
  
   
   
   
    </>
  );
};

export default PropositoHumano;