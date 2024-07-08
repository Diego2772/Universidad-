'use client';


import React, { Suspense, useState, ComponentType } from "react";
import VerMasButton from '@/components/ui/verMasButton';
import { GoGoal } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { LuBrainCircuit } from 'react-icons/lu';
import { PiLightbulbFilamentThin, PiPersonLight } from 'react-icons/pi';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



interface Content {
  title: string;
  component: ComponentType<any>;
}

export default function Proposito() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Content | null>(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const openModal = (content: Content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const contenidoLargo: Record<string, Content> = {
    propositos_humanos: {
      title: 'Propositos Humanos',
      component: React.lazy(() => import('./propositos_humanos')),
    },
    propositos_sociales: {
      title: 'Propositos Sociales',
      component: React.lazy(() => import('./propositos_sociales')),
    },
    propositos_intelectuales: {
      title: 'Propositos Intelectuales',
      component: React.lazy(() => import('./propositos_intelectuales')),
    },
    propositos_profesionales: {
      title: 'Propositos Profesionales',
      component: React.lazy(() => import('./propositos_profesionales')),
    },
    // Otros contenidos largos
  };

  return (
    <>
      <section className="w-full py-12 md:py-16">
        <div className="container-fluid grid gap-6 px-4 md:px-6">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-6 hover:shadow-2xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row items-center gap-4 w-full">
    <div className="rounded-md flex items-center justify-center aspect-square w-12 h-12 md:w-20 md:h-20">
      <GoGoal className="w-20 h-20" />
    </div>
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold">Propositos del programa</h2>
      <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
        El comité curricular del programa de Ingeniería Electromecánica de Universidad Francisco de Paula Santander, mediante un estudio de impacto, identificó las competencias básicas a nivel regional, nacional e internacional, y establece como propósito, formar profesionales con un perfil integral, competentes en el ámbito de su profesión, orientados al aprendizaje permanente, con calidad humana y socialmente responsables, con el propósito de que atiendan las necesidades del sector productivo. A continuación, se establecen los propósitos particulares que orientarán y guiarán el programa de Ingeniería Electromecánica de la Universidad Francisco de Paula Santander
      </p>
    </div>
  </div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 animate-pulse">
                <PiPersonLight className="w-20 h-20" height={32} style={{ aspectRatio: '32/32', objectFit: 'cover' }} width={32} />
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Humanos</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                  Desarrollar profesionales éticos, capacitados en relaciones interpersonales, responsables de su labor y comprometidos con la construcción de una sociedad justa y equitativa.
                </p>
              </div>
              <div className="mt-6">
                <VerMasButton onClick={() => openModal(contenidoLargo.propositos_humanos)} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 animate-pulse">
                <HiOutlineUserGroup className="w-20 h-20" height={32} style={{ aspectRatio: '32/32', objectFit: 'cover' }} width={32} />
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Sociales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                  Los propósitos sociales del programa de Ingeniería Electromecánica buscan formar profesionales comprometidos con el servicio a la comunidad
                </p>
              </div>
              <div className="mt-6">
                <VerMasButton onClick={() => openModal(contenidoLargo.propositos_sociales)} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 animate-pulse">
                <PiLightbulbFilamentThin className="w-20 h-20" height={32} style={{ aspectRatio: '32/32', objectFit: 'cover' }} width={32} />
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Intelectuales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                  Impulsar el uso óptimo de herramientas y técnicas actualizadas, para formar profesionales con conocimientos en el campo de la ingeniería electromecánica
                </p>
              </div>
              <div className="mt-6">
                <VerMasButton onClick={() => openModal(contenidoLargo.propositos_intelectuales)} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-full h-1/2 animate-pulse">
                <LuBrainCircuit className="w-20 h-20" height={32} style={{ aspectRatio: '62/62', objectFit: 'cover' }} width={64} />
              </div>
              <div className="mt-6 flex-1 w-full text-center">
                <h3 className="text-lg font-semibold animate-fadeIn">Propositos Profesionales</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-fadeIn">
                  Capacitar ingenieros para liderar empresas tecnológicas, resolver problemas complejos y mejorar la calidad de vida, fomentando la educación continua y la difusión del conocimiento.
                </p>
              </div>
              <div className="mt-6">
                <VerMasButton onClick={() => openModal(contenidoLargo.propositos_profesionales)} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && modalContent && (
  <Dialog
    fullScreen={fullScreen}
    open={modalOpen}
    onClose={closeModal}
    aria-labelledby="responsive-dialog-title"
    maxWidth="lg" // Ajusta el ancho máximo del modal (puede ser 'xs', 'sm', 'md', 'lg', 'xl')
    fullWidth // Para hacer que el modal ocupe todo el ancho posible
  >
    <DialogTitle id="responsive-dialog-title">
      {modalContent.title}
    </DialogTitle>
    <DialogContent>
      {modalContent.component && (
        <Suspense fallback={<div>Cargando...</div>}>
          <modalContent.component />
        </Suspense>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={closeModal}  sx={{ color: 'white', backgroundColor: '#EF4444', '&:hover': { backgroundColor: 'darkred' } }} >
        Cerrar
      </Button>
    </DialogActions>
  </Dialog>
)}


    </>
  );
}
