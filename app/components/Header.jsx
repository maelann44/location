import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"



const Header = () => {
  return (
<div className="relative w-full h-screen flex flex-col items-center justify-center gap-4 text-center overflow-hidden">

    {/* Image de fond */}
    <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    className="absolute inset-0 w-full h-full"
    >
    <Image
            src={assets.etageComplet}
            alt="Fond accueil"
            fill
            priority
            className="object-cover z-0"
    />
    </motion.div>

  {/* Contenu par-dessus */}
    <motion.h3
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="flex items-end gap-2 text-xl md:text-2xl mb-3 z-10"
    >
     
    </motion.h3>

    <motion.div
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="max-w-4xl z-10 px-4"
    >
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Bienvenue dans notre maison à 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Mésanger
        </span>
      </h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed"
      >
        Le point de départ parfait pour explorer les merveilles de notre région.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-white/80"
      >
        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Amateur d'histoire
        </span>
        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          Passionné de nature
        </span>
        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
          En quête de détente
        </span>
      </motion.div>
    </motion.div>

    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 z-10">
    <motion.a
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 1 }}
    href="#contact"
    className="px-10 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2"
    >
    Contactez moi
<Image src={assets.right_arrow_white} alt="" className="w-4" />
    </motion.a>
    </div>
</div>

)
}

export default Header