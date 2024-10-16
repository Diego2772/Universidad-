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
  // Simulación de datos, puedes cambiar esto por una llamada a un API o leer desde un archivo
  const teachers = [
    {
      id: 1,
      name: 'Tarazona Celis Cristian Leonardo',
      type: 'Cátedra',
      imageUrl: '/images/galeria/Docentes/CristianTarazona.jpeg',
      info: 'Ingeniero Electronico<br/>Magister en Ingenieria Electronica',
      correo:'cristianleonardotc@ufps.edu.co',
    },
    // Agrega más profesores aquí
    {
      id: 2,
      name: 'Sandoval Martinez Gloria Esmeralda',
      type: 'Cátedra',
      imageUrl: '/images/galeria/Docentes/SandovalMartinezGloriaEsmeralda.jpeg',
      info: 'Ingeniero Electromecanico<br/>Especialista en Gerencia de Recursos Energeticos<br/>Magister en Sistemas de Distribución de Energia Electrica',
      correo:'gloriaesmeraldasm@ufps.edu.co',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      type: 'Planta',
      imageUrl: '/images/galeria/EDITADAS/3.png',
      info: 'Doctora en biología con énfasis en investigación genética.',
      correo:'cristianleonardotc@ufps.edu.co',
    },
    {
      id: 4,
      name: 'Carlos Torres',
      type: 'Cátedra',
      imageUrl: '/images/galeria/EDITADAS/4.png',
      info: 'Profesor de historia y estudios culturales contemporáneos.',
      correo:'cristianleonardotc@ufps.edu.co',
    },
    {
      id: 5,
      name: 'Carlos Torres',
      type: 'Cátedra',
      imageUrl: '/images/galeria/EDITADAS/5.png',
      info: 'Profesor de historia y estudios culturales contemporáneos.',
      correo:'cristianleonardotc@ufps.edu.co',
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
      <div
        className="mx-25"
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <br />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  " >
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
      <div className="mx-25"
            style={{ marginBottom: "30px", textAlign: "justify" }}>
            
            </div>
          </div>
    </ProgramaLayout>
  );
}
