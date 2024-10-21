import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import TeacherCard from '@/components/programa/profesores/profesores';

interface Teacher {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  info: string;
  correo: string;
}

async function fetchTeachers(): Promise<Teacher[]> {
  
  const teachers = [
    {
      id: 1,
      name: 'Bautista Ruiz Jorge Hernando',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/BautistaRuizJorgeHernando.jpeg',
      info: 'Licenciado en Ciencias de la Educacion Fisica y Matematica.<br/>Especialista en Docencia de la Fisica.<br/>Magister en Metalurgia y Ciencia de los Materiales.<br/>Doctor en Ingenieria.',
      correo:'jorgebautista@ufps.edu.co',
    },
    // Agrega más profesores aquí
    {
      id: 2,
      name: 'Acevedo Peñaloza Carlos Humberto',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Ingeniero Mecanico.<br/>Magister en Ingenieria Mecanica.<br/>Doctor en Ingenieria Mecanica.',
      correo:'carloshumbertoap@ufps.edu.co',
    },
    {
      id: 3,
      name: 'Becerra Vargas Jose Armando',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/BecerraVargasJoseArmando.jpeg',
      info: 'Ingeniero Electricista.<br/>Especialista en Ingenieria Hospitalaria.<br/>Magister en Controles Industriales.',
      correo:'josearmandobv@ufps.edu.co',
    },
    {
      id: 4,
      name: 'Bermudez Santaella Jose Ricardo',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/BermudezSantaellaJoseRicardo.jpeg',
      info: 'Ingeniero Electricista.<br/>Especialista en Teleinformatica.<br/>Magister Scientiae en Automatizacion E Instrumentacion.',
      correo:'josericardobs@ufps.edu.co',
    },
    {
      id: 5,
      name: 'Cely Niño Jairo Wilgberto',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Ingeniero Mecanico.',
      correo:'jairowilgbertocn@ufps.edu.co',
    },
    {
      id: 6,
      name: 'Falla Arias Alberto',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/FallaAriasAlberto.jpeg',
      info: 'Ingeniero Mecanico.<br/>Magister en Ingenieria Mecanica.',
      correo:'albertofa@ufps.edu.co',
    },
    {
      id: 7,
      name: 'Florez Sanabria Camilo Alberto',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/FlorezSanabriaCamiloAlberto.jpeg',
      info: 'Ingeniero Mecanico.<br/>Magister Scientiarum de Mantenimiento Industrial.<br/>Magister en Practica Pedagogica.',
      correo:'camiloalbertofs@ufps.edu.co',
    },
    {
      id: 8,
      name: 'Gallego Rodriguez German Enrique',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/GallegoRodriguezGermanEnrique.jpeg',
      info: 'Ingeniero Electricista.<br/>Magister en Ingenieria Especialida en Ingenieria Electrica.',
      correo:'germanenriquegr@ufps.edu.co',
    },
    {
      id: 9,
      name: 'Peña Rodriguez Gabriel',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/PeñaRodriguezGabriel.jpeg',
      info: 'Licenciatura en Matematicas y Fisica.<br/>Especialista en Informatica Educativa.<br/>Magiister en Ciencias - Fisica.<br/>Doctor en Ingenieria de Materiales.',
      correo:'gabrielpr@ufps.edu.co',
    },
    {
      id: 10,
      name: 'Serpa Jimenez Alejandra Maria',
      type: 'Docente de Planta',
      imageUrl: '/images/Galeria/Docentes/SerpaJimenezAlejandraMaria.jpeg',
      info: 'Ingeniero Civil.<br/>Especialista en Administracion de la Construccion.<br/>Magister en Practica Pedagogica.<br/>Especialista en Practica Pedagogica.',
      correo:'alejandramariaserpa@ufps.edu.co',
    },

    {
      id: 11,
      name: 'Restrepo Chaustre Yesenia',
      type: 'Docente Ocasional',
      imageUrl: '/images/galeria/Docentes/RestrepoChaustreYesenia.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Controles Industriales.',
      correo:'yeseniarestrepo@ufps.edu.co',
    },
    {
      id: 12,
      name: 'Ayala Garcia Mauritz Leonardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/AyalaGarciaMauritzLeonardo.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Gerencia de Proyectos.',
      correo:'MAURITZLEONARDOAG@UFPS.EDU.CO',
    },
    {
      id: 13,
      name: 'Berbesi Barroso German Alberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/BerbesiBarrosoGermanAlberto.jpeg',
      info: 'Ingeniero Civil.<br/>Especialista en Fisica.',
      correo:'germanalbertobb@ufps.edu.co',
    },
    {
      id: 14,
      name: 'Buitrago Buitrago John Fredy',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/BuitragoBuitragoJohnFredy.jpeg',
      info: 'Ingeniero de Sistemas y Computación.<br/>Especialista en Bases de Datos.',
      correo:'johnfredybb@ufps.edu.co',
    },
    {
      id: 15,
      name: 'Cardenas Pinto Fabio Ricardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/CardenasPintoFabioRicardo.jpeg',
      info: 'Ingeniero Industrial.<br/>Especialista en Educacion Emprendimiento y Economia Solidaria.',
      correo:'fabioricardocapi@ufps.edu.co',
    },
    {
      id: 16,
      name: 'Carvajal Suarez Freddy Orlando',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/CarvajalSuarezFreddyOrlando.jpeg',
      info: 'Licenciado en Filosofia y Ciencias Religiosas.<br/>Especialista en Administracion de la Informatica Educativa.<br/>Magister en Educacion.',
      correo:' freddyorlandocasu@ufps.edu.co',
    },
    {
      id: 17,
      name: 'Castaño Carrillo Jesus David',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/CastañoCarrilloJesusDavid.jpeg',
      info: 'Fisico.<br/>Magister en Fisica.',
      correo:'JESUSDAVID@ufps.edu.co',
    },
    {
      id: 18,
      name: 'Chinchilla Herrera Norbey',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/ChinchillaHerreraNorbey.jpeg',
      info: 'Ingeniero Electronico.<br/>Especialista en Administracion de la Informatica Educativa.',
      correo:'norbeych@ufps.edu.co',
    },
    {
      id: 19,
      name: 'Cordon Velasco Fabio Eduardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/CordonVelascoFabioEduardo.jpeg',
      info: 'Licenciado en Filosofia y Ciencias Religiosas.<br/>Especialista en Docencia Universitaria.<br/>Magister en Filosofia Latinoamericana.<br/>Especialista en Educación Filosofía Colombiana.<br/>Doctor en Educacion.<br/>Licenciado en Sociología y Antropología Postdoctorado en Sociologia.',
      correo:'fabioeduardocv@ufps.edu.co',
    },
    {
      id: 20,
      name: 'Davila Marquez Luis Rodolfo',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/DavilaMarquezLuisRodolfo.jpeg',
      info: 'Ingeniero Electricista.<br/>Master Of Science.',
      correo:'luisdavila@ufps.edu.co',
    },
    {
      id: 21,
      name: 'Duque Suarez Maria Carolina',
      type: 'Docente de Catedra',
      imageUrl: '/images/galeria/Docentes/DuqueSuarezMariaCarolina.jpeg',
      info: 'Ingeniero Electronico.<br/>Especialista en Mecatrónica Industrial.<br/>Magister en Mantenimiento Industrial.',
      correo:'mariacarolinadusu@ufps.edu.co',
    },
  ];

  // Simulación de delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return teachers;
}

export default async function TeachersPage() {
  const teachers = await fetchTeachers();

  return (
   
    <ProgramaLayout>
  <div className="text-center mt-8 mb-6">
    <h1 className="text-4xl font-bold text-gray-800">Docentes</h1>
    <p className="text-lg text-gray-600 mt-2">
      Conoce a nuestros profesores especializados.
    </p>
  </div>
  <div
    className="mx-25"
    style={{ marginTop: "30px", textAlign: "justify" }}
  >
    <br />
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="mx-auto">
            <TeacherCard
              name={teacher.name}
              type={teacher.type}
              imageUrl={teacher.imageUrl}
              info={teacher.info}
              correo={teacher.correo}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  <div
    className="mx-25"
    style={{ marginBottom: "30px", textAlign: "justify" }}
  ></div>
</ProgramaLayout>

  );
}
