'use client'
import { workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '@/assets/assets'

export default function ChambresPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Nos Chambres</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workData.map((chambre, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={chambre.bgImage} 
                  alt={chambre.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{chambre.title}</h3>
                  <p className="text-gray-600 mb-2">{chambre.description}</p>
                  <p className="text-blue-600 font-semibold mb-4">{chambre.description2}</p>
                  <Link 
                    href={`/chambres/${index + 1}`}
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Voir détails
                    <Image src={assets.right_arrow} alt="Arrow" className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
