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
      imageUrl: '/images/Galeria/Docentes/RestrepoChaustreYesenia.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Controles Industriales.',
      correo:'yeseniarestrepo@ufps.edu.co',
    },
    {
      id: 12,
      name: 'Ayala Garcia Mauritz Leonardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/AyalaGarciaMauritzLeonardo.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Gerencia de Proyectos.',
      correo:'MAURITZLEONARDOAG@UFPS.EDU.CO',
    },
    {
      id: 13,
      name: 'Berbesi Barroso German Alberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/BerbesiBarrosoGermanAlberto.jpeg',
      info: 'Ingeniero Civil.<br/>Especialista en Fisica.',
      correo:'germanalbertobb@ufps.edu.co',
    },
    {
      id: 14,
      name: 'Buitrago Buitrago John Fredy',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/BuitragoBuitragoJohnFredy.jpeg',
      info: 'Ingeniero de Sistemas y Computación.<br/>Especialista en Bases de Datos.',
      correo:'johnfredybb@ufps.edu.co',
    },
    {
      id: 15,
      name: 'Cardenas Pinto Fabio Ricardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/CardenasPintoFabioRicardo.jpeg',
      info: 'Ingeniero Industrial.<br/>Especialista en Educacion Emprendimiento y Economia Solidaria.',
      correo:'fabioricardocapi@ufps.edu.co',
    },
    {
      id: 16,
      name: 'Carvajal Suarez Freddy Orlando',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/CarvajalSuarezFreddyOrlando.jpeg',
      info: 'Licenciado en Filosofia y Ciencias Religiosas.<br/>Especialista en Administracion de la Informatica Educativa.<br/>Magister en Educacion.',
      correo:' freddyorlandocasu@ufps.edu.co',
    },
    {
      id: 17,
      name: 'Castaño Carrillo Jesus David',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/CastañoCarrilloJesusDavid.jpeg',
      info: 'Fisico.<br/>Magister en Fisica.',
      correo:'JESUSDAVID@ufps.edu.co',
    },
    {
      id: 18,
      name: 'Chinchilla Herrera Norbey',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/ChinchillaHerreraNorbey.jpeg',
      info: 'Ingeniero Electronico.<br/>Especialista en Administracion de la Informatica Educativa.',
      correo:'norbeych@ufps.edu.co',
    },
    {
      id: 19,
      name: 'Cordon Velasco Fabio Eduardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/CordonVelascoFabioEduardo.jpeg',
      info: 'Licenciado en Filosofia y Ciencias Religiosas.<br/>Especialista en Docencia Universitaria.<br/>Magister en Filosofia Latinoamericana.<br/>Especialista en Educación Filosofía Colombiana.<br/>Doctor en Educacion.<br/>Licenciado en Sociología y Antropología Postdoctorado en Sociologia.',
      correo:'fabioeduardocv@ufps.edu.co',
    },
    {
      id: 20,
      name: 'Davila Marquez Luis Rodolfo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/DavilaMarquezLuisRodolfo.jpeg',
      info: 'Ingeniero Electricista.<br/>Master Of Science.',
      correo:'luisdavila@ufps.edu.co',
    },
    {
      id: 21,
      name: 'Duque Suarez Maria Carolina',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/DuqueSuarezMariaCarolina.jpeg',
      info: 'Ingeniero Electronico.<br/>Especialista en Mecatrónica Industrial.<br/>Magister en Mantenimiento Industrial.',
      correo:'mariacarolinadusu@ufps.edu.co',
    },
    {
      id: 22,
      name: 'Duque Suarez Oscar Manuel',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/DuqueSuarezOscarManuel.jpeg',
      info: 'Ingeniero Mecatrónico.<br/>Especialista en Mecatrónica Industrial.<br/>Magister en Controles Industriales.<br/>Diplomado Docencia Universitaria Mediada Por las Tic.',
      correo:'oscarmanuelds@ufps.edu.co',
    },
    {
      id: 23,
      name: 'Eugenio Lopez Jose Rafael',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/EugenioLopezJoseRafael.jpeg',
      info: 'Ingeniero Mecanico.<br/>Magister en Ciencia y Tecnologia de Materiales.',
      correo:'joserafaelel@ufps.edu.co',
    },
    {
      id: 24,
      name: 'Ferreira Jaimes Julian',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/FerreiraJaimesJulian.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Ingenieria Electronica.<br/>Doctor en Educacion.',
      correo:'julianfj@ufps.edu.co',
    },
    {
      id: 25,
      name: 'Forero Duran Myriam',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/ForeroDuranMyriam.jpeg',
      info: 'Ingeniera Mecanica.',
      correo:'myriamfd@ufps.edu.co',
    },
    {
      id: 26,
      name: 'Galvis Ferreira Carlos Julio',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GalvisFerreiraCarlosJulio.jpeg',
      info: 'Tecnologo en Obras Civiles.<br/>Licenciado en Educacion Especialidad en Areas Tecnologicas.<br/>Especialista en Salud Ocupacional.',
      correo:'carlosjuliogf@ufps.edu.co',
    },
    {
      id: 27,
      name: 'Galvis Montagut Alexandra',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GalvisMontagutAlexandra.jpeg',
      info: 'Ingeniero Electromecanico.<br/>Especialista en Gerencia en Riesgos Laborales, Seguridad y Salud en El Trabajo.',
      correo:'alexandragm@ufps.edu.co',
    },
    {
      id: 28,
      name: 'Garcia Martinez Myriam Deisy',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GarciaMartinezMyriamDeisy.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Practica Pedagogica Universitaria.',
      correo:'myriamdeisygm@ufps.edu.co',
    },
    {
      id: 29,
      name: 'Garcia Martinez Ruth Stella',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GarciaMartinezRuthStella.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Magister en Practica Pedagogica.',
      correo:'ruthstellagm@ufps.edu.co',
    },
    {
      id: 30,
      name: 'Gomez Angarita Adan Alberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GomezAngaritaAdanAlberto.jpeg',
      info: 'Licenciado en Matematicas y Fisica.<br/>Especialista en Educacion Matematica.<br/>Especialista en Fisica.',
      correo:'adanalbertoga@ufps.edu.co',
    },
    {
      id: 31,
      name: 'Gonzalez Castellanos Jaime Antonio',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/GonzalezCastellanosJaimeAntonio.jpeg',
      info: 'Ingeniero Electricista.<br/>Doctor en Ingenieria Electrica.',
      correo:'jaimeantoniogc@ufps.edu.co',
    },
    {
      id: 32,
      name: 'Medina Duran Johnny Omar',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MedinaDuranJohnnyOmar.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Controles Industriales.<br/>Doctor en Educacion.',
      correo:'johnnyomarmd@ufps.edu.co',
    },
    {
      id: 33,
      name: 'Mejia Maria Amparo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MejiaMariaAmparo.jpeg',
      info: 'Ingeniero Electronico.<br/>Especialista en Amdinistración de la Informatica Educativa.<br/>Magister en Docencia de la Matematica.',
      correo:'amparomm@ufps.edu.co',
    },
    {
      id: 34,
      name: 'Mejia Pallares Javier Alberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MejiaPallaresJavierAlberto.jpeg',
      info: 'Licenciado en Matematicas y Fisica.<br/>Especialista en Fisica',
      correo:'javieralbertomp@ufps.edu.co',
    },
    {
      id: 35,
      name: 'Mendoza Perez John Camilo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Gerencia de Empresas.<br/>Especialista en Ingenieria de Software.<br/>Magister en Gerencia de Recursos Humanos.',
      correo:'johncamilomp@ufps.edu.co',
    },
    {
      id: 36,
      name: 'Mendoza Reyes Cecilio',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MendozaReyesCecilio.jpeg',
      info: 'Especialista en Computacion Para la Docencia.<br/>Licenciado en Educacion con Especialidad en Fisica.<br/>Magister en Fisica.',
      correo:'ceciliomr@ufps.edu.co',
    },
    {
      id: 37,
      name: 'Moreno Hernandez Maria Eugenia',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MorenoHernandezMariaEugenia.jpeg',
      info: 'Ingeniero Quimico.<br/>Especialista en Administracion de la Informatica Educativa.',
      correo:'mariaeugeniamh@ufps.edu.co',
    },
    {
      id: 38,
      name: 'Murillo Rodriguez Dioselina',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/MurilloRodriguezDioselina.jpeg',
      info: 'Ingeniera de Sistemas.<br/>Especialista en Gerencia de Negocios Internacionales.<br/>Especialista en Gerencia Financiera Sistematizada.<br/>Especialista en Docencia Universitaria.',
      correo:'dioselinamr@ufps.edu.co',
    },
    {
      id: 39,
      name: 'Ordonez Correa Jesus Hernando',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/OrdonezCorreaJesusHernando.jpeg',
      info: 'Ingeniero Electromecanico',
      correo:'jesushernandoorco@ufps.edu.co',
    },
    {
      id: 40,
      name: 'Peña Caceres Omar Enrique',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/PeñaCaceresOmarEnrique.jpeg',
      info: 'Contador Publico.<br/>Especialista en Gerencia Publica.<br/>Administrador de Empresas.',
      correo:'omarenriquepc@ufps.edu.co',
    },
    {
      id: 41,
      name: 'Ramirez Mateus Luzmiraleny',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RamirezMateusLuzmiraleny.jpeg',
      info: 'Ingeniero Industrial.<br/>Especialista en Gerencia en Riesgos Laborales, Seguridad y Salud en El Trabajo.',
      correo:'luzmiralenyrmram@ufps.edu.co',
    },
    {
      id: 42,
      name: 'Ramirez Moreno Harold De Jesus',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RamirezMorenoHaroldDeJesus.jpeg',
      info: 'Administrador de Empresas.<br/>Especialista en Gestion y Planificacion del Desarrollo Urbano y Regional.',
      correo:'harolddejesusrm@ufps.edu.co',
    },
    {
      id: 43,
      name: 'Rangel Rolon Jose Alejo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RangelRolonJoseAlejo.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Practica Pedagogica.',
      correo:'josealejor@ufps.edu.co',
    },
    {
      id: 44,
      name: 'Rico Patiño Jessica Lorena',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RicoPatiñoJessicaLorena.jpeg',
      info: 'Licenciado en Matematicas E Informatica.<br/>Magister en Enseñanza de las Ciencias.',
      correo:'jessicalorenaripa@ufps.edu.co',
    },
    {
      id: 45,
      name: 'Rivera Gutierrez Ingrid Karina',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RiveraGutierrezIngridKarina.jpeg',
      info: 'Especialista en Derecho Inmoviliario, Notarial y Urbanistico.<br/>Especialista en Educacion Emprendimiento y Economia Solidaria.<br/>Abogado.',
      correo:'ingridkarinarg@ufps.edu.co',
    },
    {
      id: 46,
      name: 'Rodriguez Ibañez Raul Eduardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RodriguezIbañezRaulEduardo.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Informatica Educativa.<br/>Doctor en Educacion.',
      correo:'rauleduardori@ufps.edu.co',
    },
    {
      id: 47,
      name: 'Rodriguez Paez Martha Patricia',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RodriguezPaezMarthaPatricia.jpeg',
      info: 'Licenciado en Educacion Basica Enfasis en Humanidades y Lengua Castellana.<br/>Especialista en Gestion Educativa.<br/>Magister en Innovaciones Educativas.',
      correo:' marthapatriciarp@ufps.edu.co',
    },
    {
      id: 48,
      name: 'Romero Becerra Ana Ludia',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RomeroBecerraAnaLudia.jpeg',
      info: 'Fisica.<br/>Magister en Fisica.',
      correo:'analudiarb@ufps.edu.co',
    },
    {
      id: 49,
      name: 'Ruiz Miranda Fabian Humberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/RuizMirandaFabianHumberto.jpeg',
      info: 'Ingeniero Civil.<br/>Gerencia Financiera Sistematizada.<br/>Especialista en Fisica.',
      correo:'fabianhumbertorm@ufps.edu.co',
    },
    {
      id: 50,
      name: 'Saenz Contreras Daniel',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/SaenzContrerasDaniel.jpeg',
      info: 'Licenciado en Educacion Especialidad Matematicas y Fisica.<br/>Especialista en Educacion Matematica.<br/>Magister en Innovaciones Educativas.',
      correo:'danielsaenz@ufps.edu.co',
    },
    {
      id: 51,
      name: 'Salamanca Landinez Alvaro',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/SalamancaLandinezAlvaro.jpeg',
      info: 'Ingeniero de Sistemas.<br/>Especialista en Informatica Educativa.<br/>Ingeniero Civil.<br/>Magister en Educación Matematica.',
      correo:'alvarosl@ufps.edu.co',
    },
    {
      id: 52,
      name: 'Sanchez Daza Juan Alberto',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Fisico.<br/>Magister en Fisica.',
      correo:'JUANALBERTOSD@ufps.edu.co',
    },
    {
      id: 53,
      name: 'Sandoval Martinez Gloria Esmeralda',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/SandovalMartinezGloriaEsmeralda.jpeg',
      info: 'Ingeniero Electromecanico.<br/>Especialista en Gerencia de Recursos Energeticos.<br/>Magister en Sistemas de Distribución de Energia Electrica.',
      correo:'gloriaesmeraldasm@ufps.edu.co',
    },
    {
      id: 54,
      name: 'Tarazona Celis Cristian Leonardo',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/TarazonaCelisCristianLeonardo.jpeg',
      info: 'Ingeniero Electronico.<br/>Magister en Ingenieria Electronica.',
      correo:'cristianleonardotc@ufps.edu.co',
    },
    {
      id: 55,
      name: 'Torres Claro Jaider',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/TorresClaroJaider.jpeg',
      info: 'Sociologo.<br/>Magister Scientiarum en Orientacion.',
      correo:'jaidertc@ufps.edu.co',
    },
    {
      id: 56,
      name: 'Valoyes Gelvez Jose Elkin',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Ingeniero Electromecanico.<br/>Especialista en Sistemas de Transmisión y Distribución de Energia Electrica.<br/>Magister en Ingenieria.',
      correo:'joseelkinvg@ufps.edu.co',
    },
    {
      id: 57,
      name: 'Vera Rozo Edwin Jose',
      type: 'Docente de Catedra',
      imageUrl: '/images/Galeria/Docentes/nofoto.avif',
      info: 'Ingeniero Electronico.<br/>Magister en Gestion de Proyectos Informaticos.',
      correo:'EDWINJOSEVR@UFPS.EDU.CO',
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
