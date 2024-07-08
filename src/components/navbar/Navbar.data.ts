import { FaUsers, FaUser } from "react-icons/fa";
import { FaGraduationCap, FaCircleUser } from "react-icons/fa6";
import { BsFillWalletFill } from "react-icons/bs";

export const firstNavbarData = [
  {
    id: 1,
    name: "Aspirantes",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/aspirantes/952",
    icono: FaUsers,
  },
  {
    id: 2,
    name: "Estudiantes",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/estudiantes/953",
    icono: FaUser,
  },
  {
    id: 1,
    name: "Graduados",
    idLink: "https://ww2.ufps.edu.co/universidad/perfiles/egresados/954",
    icono: FaGraduationCap,
  },
  {
    id: 1,
    name: "Docentes",
    idLink: "https://docentes.ufps.edu.co/",
    icono: FaCircleUser,
  },
  {
    id: 1,
    name: "Empresarios",
    idLink: "",
    icono: BsFillWalletFill,
  },
];

export const secondNavbarData = [
  {
    id: 1,
    name: "Programa",
  },
  {
    id: 2,
    name: "Formación-Investigación",
  },

  {
    id: 4,
    name: "Visibilidad-Movilidad",
  },
  {
    id: 5,
    name: "Bienestar",
  },
  {
    id: 6,
    name: "Infraestructura", 
  },
  {
    id: 7,
    name: "Estudiantes-Graduados",
  },
];

export const links = [
  {
    name: "Programa",
    submenu: true,
    sublinks: [
      {
      
        sublink: [
          { name: "Presentacion", link: "/programa/presentacion" },
          { name: "Misión, Visión y Valores", link: "/programa/mision-vision" },
          { name: "Propósito del Programa", link: "/programa/proposito" },
          { name: "Perfiles", link: "/programa/perfiles" },
          { name: "Competencias", link: "/programa/competencias" },
          { name: "Diseño curricular", link: "/programa/curriculum" },
          { name: "Aspectos academicos", link: "/programa/aspectos/" },
          { name: "Comité curricular", link: "/programa/comite_curricular/" },
          { name: "Profesores", link: "/programa/profesores" },
          { name: "Autoevaluacion", link: "/programa/autoevaluacion/" },
          { name: "Plan de mejoramiento", link: "/programa/plan_de_mejoramiento/" },
        ] ,
      }
    ],
  },

  {
    name: "Formacion-Investigacion",
    submenu: true,
    sublinks: [
      {
       
        sublink: [
          { name: "Investigación en el Programa", link: "/formacion-investigacion/investigacion" },
          { name: "Hablemos de investigacion", link: "/formacion-investigacion/hablemos_de_investigacion" },
          { name: "Grupos de investigación", link: "/formacion-investigacion/grupos" },
          { name: "Proyectos", link: "/formacion-investigacion/proyectos" },
          { name: "Capsulas de aprendizaje", link: "/formacion-investigacion/capsulas" },
        ],
      },
      
    ],
  },
 
  
  {
    name: "Visibilidad-Movilidad",
    submenu: true,
    sublinks: [
      {
        
        sublink: [
          { name: "Entorno nacional e internacional", link: "/visibilidad-movilidad/interaccion" },
          { name: "Movilidad del programa", link: "/visibilidad-movilidad/movilidad" },
          { name: "Convocatorias Vigentes", link: "/visibilidad-movilidad/convocatorias_vigentes" },
          { name: "EISI", link: "/visibilidad-movilidad/EISI" },
          { name: "CIINATIC", link: "/visibilidad-movilidad/CIINATIC" },
          { name: "Oficina de Relaciones Internacionales", link: "/visibilidad-movilidad/relaciones_internacionales" },
         
        ],
      }
    ],
  },
  {
    name: "Bienestar",
    submenu: true,
    sublinks: [
      {
      
        sublink: [
          { name: "Bienestar univiersitario", link: "/bienestar/bienestar_universitario" },
          { name: "Bienestar univiersitario en el programa", link: "/bienestar/bienestar_universitario_en_el_programa" },
          { name: "Oferta laboral", link: "/bienestar/oferta_laboral" },
          { name: "Contacto", link: "/bienestar/contacto" },
          { name: "Calendario de Vicerrectoría de Bienestar", link: "/bienestar/calendario" },
         
         
        ],
      }
    ],
  },  

  {
    name: "Infraestructura",
    submenu: true,
    sublinks: [
      {
      
        sublink: [
          { name: "Laboratorios", link: "/infraestructura/laboratorios" },
          { name: "Salas de computo", link: "/infraestructura/salas_de_computo" },
          { name: "Auditorio", link: "/infraestructura/auditorio" },
          { name: "Software Academico", link: "/infraestructura/software_academico" },
        
         
        ],
      }
    ],
  }, 

  {/* 
  {
    name: "Estudiantes-Graduados",
    submenu: true,
    sublinks: [
      {
       
        sublink: [
          { name: "Estatuto estudiantil", link: "/estudiantes-graduados/Estatuto_estudiantil" },
          { name: "Documentación Practicas Empresariales", link: "/estudiantes-graduados/documentacion_practicas_empresariales" },
          { name: "Horarios de Asesorías", link: "/estudiantes-graduados/horarios_asesorias" },
          { name: "MODALIDAD DE TRABAJO DE GRADO", link: "/estudiantes-graduados/modalida_trabajo_de_grado" },
          { name: "Beca Trabajos y Monitorías", link: "/estudiantes-graduados/beca_trabajos_y_monitorias" },
          { name: "Pruebas Saber Pro", link: "/estudiantes-graduados/pruebas_saber_pro" },
          { name: "Amigos Académicos", link: "/estudiantes-graduados/amigos_academicos" },
          { name: "Recursos", link: "/estudiantes-graduados/recursos" },
          { name: "Registrar Atención Estudiantes", link: "/estudiantes-graduados/registrar_atencion_estudiantes" },
          { name: "Descarga linux SILUX", link: "/estudiantes-graduados/descarga_linux_silux" },
          { name: "Recursos de apoyo", link: "/estudiantes-graduados/recursos_de_apoyo" },
          { name: "Lista de Correo", link: "/estudiantes-graduados/lista_de_correo" },
          { name: "Graduados", link: "/estudiantes-graduados/graduados" },

       
        
         
        ],
      }
    ],
  },  */}
  
  
];
