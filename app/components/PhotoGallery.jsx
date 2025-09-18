'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const PhotoGallery = ({ photos, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Debug: vérifier que les photos sont bien reçues
  console.log('Photos reçues:', photos)
  console.log('Titre:', title)
  console.log('Type de photos:', typeof photos)
  console.log('Est un array:', Array.isArray(photos))

  // Vérifier si photos existe et n'est pas vide
  if (!photos || !Array.isArray(photos) || photos.length === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Galerie photos</h3>
        <div className="h-80 md:h-96 lg:h-[500px] rounded-lg bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Aucune photo disponible</p>
        </div>
      </div>
    )
  }

  const openModal = (index) => {
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <>
      {/* Galerie principale */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Galerie photos</h3>
        
        {/* Photo principale */}
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden cursor-pointer group bg-white"
            onClick={() => openModal(selectedIndex)}
          >
            {photos[selectedIndex] ? (
              <Image
                src={photos[selectedIndex]}
                alt={`${title} - Photo ${selectedIndex + 1}`}
                fill
                className="object-cover"
                priority={selectedIndex === 0}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Image non disponible</p>
              </div>
            )}
            <div className="absolute inset-0 bg-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Boutons de navigation */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Miniatures */}
        {photos.length > 1 && (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'ring-4 ring-blue-500 ring-opacity-50' 
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={photo}
                  alt={`${title} - Miniature ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white rounded-full p-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Indicateur de position */}
        {photos.length > 1 && (
          <div className="flex justify-center space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal plein écran */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex]}
                alt={`${title} - Photo ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Boutons de fermeture et navigation dans le modal */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Indicateur de position dans le modal */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 rounded-full px-4 py-2">
                <span className="text-sm text-gray-800">
                  {selectedIndex + 1} / {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery