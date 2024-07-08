import React from 'react';
import { GrGrow } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi"
import { MdOutlineEngineering } from "react-icons/md";



const PropositosProfesionales = () => {
    return (

        <>
          <section className="w-full py-12 md:py-2">
            <div className="container grid gap-6 px-4 md:px-6">
           
              <div className="bg-white rounded-lg shadow-lg  p-6 hover:shadow-2xl transition-shadow duration-300">
               
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                    <MdOutlineEngineering  className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
                      
                     
                    </div>
                  
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Formar ingenieros capaces de crear, dirigir y administrar empresas de base tecnológica, que aporten soluciones a los requerimientos que se presenten. 
                    </p>
                  </li>
                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                 
                    <MdOutlineEngineering  className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
    
                    </div> 
                 
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Dotar al profesional de Ingeniería Electromecánica de herramientas científicas y tecnológicas para solucionar problemas complejos que requieran el empleo del modelamiento matemático y los avances técnicos específicos del área, fortaleciendo las relaciones Universidad – Empresa – Comunidad en aras de contribuir al desarrollo regional fronterizo. 
                    </p>
                  </li>
                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                    <MdOutlineEngineering   className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
                    </div>
                   
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Consolidar la formación de un profesional con sólidos conocimientos que le permiten transferir soluciones tecnológicas a problemas de su entorno, con el fin de optimar los procesos productivos y la calidad de vida de la ciudadanía. 
                    </p>
                  </li>
                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                    <MdOutlineEngineering className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
                    </div>
    
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Formar ingenieros con la capacidad para continuar estudios de postgrados, en ingeniería electromecánica u otros campos afines. 
                    </p>
                  </li>        
                
                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                    <MdOutlineEngineering className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
                    </div>
    
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Divulgar los conocimientos desarrollados dentro del presente programa curricular por medio de conferencias, encuentros, seminarios o grupos de investigación. 
                    </p>
                  </li> 

                  <li className="bg-gray-100 rounded-lg p-4  flex flex-col items-center justify-center hover:bg-gray-200  transition-colors duration-300">
                    <div className="bg-gray-200 rounded-md flex items-center justify-center aspect-square w-12 h-12  mb-4">
                    <MdOutlineEngineering className='w-6 h-6'  style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}/>
                    </div>
    
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                    Llevar a la práctica el conocimiento impartido por cada uno de los docentes de la universidad Francisco de Paula Santander
                    </p>
                  </li> 


                </ul>
              </div>
            </div>
          </section>
        
       
      
       
       
       
        </>
      );
};

export default PropositosProfesionales;