'use client'
import { useState } from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

// Define el JSON con los datos de las imágenes para Novedades
const novedadesData = [
  { "src": "/images/proximas/1.jpg", "name": "Image 1", "description": "Description of image 1." },
  { "src": "/images/proximas/2.jpg", "name": "Image 2", "description": "Description of image 2." },
  { "src": "/images/proximas/3.jpg", "name": "Image 3", "description": "Description of image 3." },
  { "src": "/images/proximas/4.jpg", "name": "Image 4", "description": "Description of image 4." },
  { "src": "/images/proximas/5.jpg", "name": "Image 5", "description": "Description of image 5." },
  { "src": "/images/proximas/6.jpg", "name": "Image 6", "description": "Description of image 6." },
  { "src": "/images/proximas/7.jpg", "name": "Image 7", "description": "Description of image 7." },
  { "src": "/images/proximas/8.jpg", "name": "Image 8", "description": "Description of image 8." },
  { "src": "/images/proximas/9.jpg", "name": "Image 9", "description": "Description of image 9." },
  { "src": "/images/proximas/10.jpg", "name": "Image 10", "description": "Description of image 10." },
  { "src": "/images/proximas/11.jpg", "name": "Image 11", "description": "Description of image 11." },
  { "src": "/images/proximas/12.jpg", "name": "Image 12", "description": "Description of image 12." },
  { "src": "/images/proximas/13.jpg", "name": "Image 13", "description": "Description of image 13." },
  { "src": "/images/proximas/14.jpg", "name": "Image 14", "description": "Description of image 14." }
];

export default function NovedadesCompleta() {
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesPerPage = 6;
  const totalPages = Math.ceil(novedadesData.length / imagesPerPage);

  const handleOpen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedImages = novedadesData.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return (
    <>

    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
    <div className="p-6 sm:flex sm:items-center sm:justify-between">
  <div>
    <div className="my-10">
      <h1 style={{ fontWeight: "bold", fontSize: '2rem' }}>Proximos Eventos</h1>
    </div>
    <p className="text-gray-600 sm:text-base lg:text-lg">
      Estos son nuestros proximos eventos. 
    </p>
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={() => handleOpen(image.src)}
          >
            <Image
              src={image.src}
              alt={image.name}
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">{image.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button 
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          < GrLinkPrevious className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button 
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 ml-4"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
          < GrLinkNext  className="w-4 h-4 ml-2" />
        </button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 outline-none">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="object-contain"
            />
          )}
        </Box>
      </Modal>
    </section>
    </>

  );
}
