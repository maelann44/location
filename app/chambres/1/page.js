'use client'
import { workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PhotoGallery from '../../components/PhotoGallery'
import { assets } from '@/assets/assets'

export default function Chambre1() {
  const chambre = workData[0]
  const details = {
    title: "Chambre 1 spacieuse",
    description: "Une chambre spacieuse et confortable parfaite pour 3 personnes",
    features: [
      "Lit double + lit simple",
      "Bureau de travail",
      "Armoire spacieuse",
      "Fenêtre avec vue sur le jardin",
      "WiFi gratuit",
      "Chauffage individuel"
    ],
    amenities: [
      "Salle de bain privée",
      "Serviettes fournies",
      "Produits d'hygiène",
      "Sèche-cheveux"
    ],
    price: "32€",
    size: "28 m²",
    capacity: "3 personnes"
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{details.title}</h1>
          <p className="text-xl text-gray-600">{details.description}</p>

          <div className="mb-12">
            <PhotoGallery photos={chambre.gallery} title={chambre.title} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">À propos de cette chambre</h2>
                <p className="text-gray-700 mb-6">{details.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{details.capacity}</div>
                    <div className="text-gray-600">Capacité</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{details.size}</div>
                    <div className="text-gray-600">Surface</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{details.price}</div>
                    <div className="text-gray-600">Prix/nuit</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Équipements inclus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {details.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">Services inclus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Réserver cette chambre</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {details.price}
                  <span className="text-lg text-gray-600">/nuit</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date d&apos;arrivée
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de départ
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de personnes
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4">
                  Réserver maintenant
                </button>

                <div className="text-center">
                  <Link 
                    href="/chambres" 
                    className="text-blue-600 hover:underline flex items-center justify-center"
                  >
                    <Image src={assets.arrow_icon} alt="Retour" className="w-4 h-4 mr-2 rotate-180" />
                    Voir toutes les chambres
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
