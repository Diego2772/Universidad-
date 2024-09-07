import React from "react";
import ProgramaLayout from "@/app/layouts/programaLayout";
import TeacherCard from '@/components/programa/profesores/profesores';

interface Teacher {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  info: string;
}

async function fetchTeachers(): Promise<Teacher[]> {
  // Simulación de datos, puedes cambiar esto por una llamada a un API o leer desde un archivo
  const teachers = [
    {
      id: 1,
      name: 'María García',
      type: 'Planta',
      imageUrl: '/images/galeria/EDITADAS/1.png',
      info: 'Experta en literatura española con 15 años de experiencia docente.',
    },
    // Agrega más profesores aquí
    {
      id: 2,
      name: 'Juan Pérez',
      type: 'Cátedra',
      imageUrl: '/images/galeria/EDITADAS/2.png',
      info: 'Profesor de matemáticas con especialización en álgebra avanzada.',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      type: 'Planta',
      imageUrl: '/images/galeria/EDITADAS/3.png',
      info: 'Doctora en biología con énfasis en investigación genética.',
    },
    {
      id: 4,
      name: 'Carlos Torres',
      type: 'Cátedra',
      imageUrl: '/images/galeria/EDITADAS/4.png',
      info: 'Profesor de historia y estudios culturales contemporáneos.',
    },
    {
      id: 5,
      name: 'Carlos Torres',
      type: 'Cátedra',
      imageUrl: '/images/galeria/EDITADAS/5.png',
      info: 'Profesor de historia y estudios culturales contemporáneos.',
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
