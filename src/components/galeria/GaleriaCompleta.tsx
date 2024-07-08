'use client'
import { useState } from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

// Define el JSON con los datos de las imágenes
const imagesData = [
  { "src": "/images/Galeria/EDITADAS/1.png", "name": "Laboratorio", "description": "Description of image 1." },
  { "src": "/images/Galeria/EDITADAS/2.png", "name": "Image 2", "description": "Description of image 2." },
  { "src": "/images/Galeria/EDITADAS/3.png", "name": "Image 3", "description": "Description of image 3." },
  { "src": "/images/Galeria/EDITADAS/4.png", "name": "Image 4", "description": "Description of image 4." },
  { "src": "/images/Galeria/EDITADAS/5.png", "name": "Image 5", "description": "Description of image 5." },
  { "src": "/images/Galeria/EDITADAS/6.png", "name": "Image 6", "description": "Description of image 6." },
  { "src": "/images/Galeria/EDITADAS/7.png", "name": "Image 7", "description": "Description of image 7." },
  { "src": "/images/Galeria/EDITADAS/8.png", "name": "Image 8", "description": "Description of image 8." },
  { "src": "/images/Galeria/EDITADAS/9.png", "name": "Image 9", "description": "Description of image 9." },
  { "src": "/images/Galeria/EDITADAS/10.png", "name": "Image 10", "description": "Description of image 10." },
  { "src": "/images/Galeria/EDITADAS/11.png", "name": "Image 11", "description": "Description of image 11." },
  { "src": "/images/Galeria/EDITADAS/12.png", "name": "Image 12", "description": "Description of image 12." },
  { "src": "/images/Galeria/EDITADAS/13.png", "name": "Image 13", "description": "Description of image 13." },
  { "src": "/images/Galeria/EDITADAS/14.png", "name": "Image 14", "description": "Description of image 14." },
  { "src": "/images/Galeria/EDITADAS/15.png", "name": "Image 15", "description": "Description of image 15." },
  { "src": "/images/Galeria/EDITADAS/16.png", "name": "Image 16", "description": "Description of image 16." },
  { "src": "/images/Galeria/EDITADAS/17.png", "name": "Image 17", "description": "Description of image 17." },
  { "src": "/images/Galeria/EDITADAS/18.png", "name": "Image 18", "description": "Description of image 18." },
  { "src": "/images/Galeria/EDITADAS/19.png", "name": "Image 19", "description": "Description of image 19." },
  { "src": "/images/Galeria/EDITADAS/20.png", "name": "Image 20", "description": "Description of image 20." },
  { "src": "/images/Galeria/EDITADAS/21.png", "name": "Image 21", "description": "Description of image 21." },
  { "src": "/images/Galeria/EDITADAS/22.png", "name": "Image 22", "description": "Description of image 22." },
  { "src": "/images/Galeria/EDITADAS/23.png", "name": "Image 23", "description": "Description of image 23." },
  { "src": "/images/Galeria/EDITADAS/24.png", "name": "Image 24", "description": "Description of image 24." },
  { "src": "/images/Galeria/EDITADAS/25.png", "name": "Image 25", "description": "Description of image 25." },
  { "src": "/images/Galeria/EDITADAS/26.png", "name": "Image 26", "description": "Description of image 26." },
  { "src": "/images/Galeria/EDITADAS/27.png", "name": "Image 27", "description": "Description of image 27." },
  { "src": "/images/Galeria/EDITADAS/28.png", "name": "Image 28", "description": "Description of image 28." },
  { "src": "/images/Galeria/EDITADAS/29.png", "name": "Image 29", "description": "Description of image 29." },
  { "src": "/images/Galeria/EDITADAS/30.png", "name": "Image 30", "description": "Description of image 30." },
  { "src": "/images/Galeria/EDITADAS/31.png", "name": "Image 31", "description": "Description of image 31." }
];

export default function GaleriaCompleta() {
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesPerPage = 6;
  const totalPages = Math.ceil(imagesData.length / imagesPerPage);

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

  const displayedImages = imagesData.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
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
  );
}
