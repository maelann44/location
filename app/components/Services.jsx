import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <div id='environs' className='w-full px-[12%] py-10 scorll-mt-20'>

        <h4 className='text-center mb-2 text-lg'>         </h4>
        <h2 className='text-center text-5xl'>Les environs</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Une région riche

        Offrez-vous une échappée belle depuis notre accueillante demeure à Mésanger. 
        Laissez-vous guider par l'appel de l'aventure dans un rayon de 50 kilomètres,
         où la culture, l'histoire, et la nature se mêlent harmonieusement. Partez à 
         la découverte de paysages époustouflants, de monuments historiques qui racontent
          des siècles d'histoire, et de marchés locaux remplis de saveurs et de couleurs. 
          Profitez de chaque moment pour vous immerger dans la vie locale, savourer des expériences 
          culinaires uniques, et vous laisser surprendre par la diversité des activités disponibles.



        </p>
        <div className='grid grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title,description,link}, index)=>(
                
                <div
                    key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                    style={{
                        transition: 'background-color 0.5s, box-shadow 0.5s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fcf4ff';
                        e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 0.3)'; // Ombre personnalisée
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.boxShadow = '';
                    }}
                >







                    <Image src={icon} alt="" className='w-10 ' />   
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read More <Image  alt='' src={assets.right_arrow} className="w-4" />
                    </a>



                </div>
            ))}
        </div>
    </div>
  )
}

export default Services