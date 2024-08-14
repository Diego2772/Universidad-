'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const images = [
    '/images/Galeria/EDITADAS/2.png',
    '/images/Galeria/EDITADAS/10.png',
    '/images/Galeria/EDITADAS/22.png',
    '/images/Galeria/EDITADAS/16.png',
    '/images/Galeria/EDITADAS/12.png',
    '/images/Galeria/EDITADAS/30.png',
    '/images/Galeria/EDITADAS/27.png',
    '/images/Galeria/EDITADAS/8.png',
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8E8E8]">
      <div className="grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Galería de Fotos
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Echa un vistazo a nuestra galería de fotos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              onClick={() => handleOpen(src)}
            >
              <span className="absolute inset-0 z-10 cursor-pointer" aria-hidden="true"></span>
              <Image
                alt={`Foto ${index + 1}`}
                className="object-cover w-full aspect-[4/3]"
                src={src}
                width={400}
                height={300}
                priority={index < 2} // Prioridad de carga para las dos primeras imágenes
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/contenido/galeria"
        >
          Ver más
        </Link>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 outline-none">
          {selectedImage && (
            <Image
              alt="Imagen seleccionada"
              src={selectedImage}
              width={800}
              height={600}
              layout="responsive"
              objectFit="contain"
              className="block"
            />
          )}
        </Box>
      </Modal>
    </section>
  );
};

export default Galeria;
