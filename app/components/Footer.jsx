import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>

        <div className='text-center '>
            <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2' />


            <div className='flex w-max items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt="" className='w-6' />
                robinfabrice32@yahoo.fr

                <Image src={assets.mail_icon} alt="" className='w-6' />
                Téléphone: +33 6 72 03 38 13

                <Image src={assets.mail_icon} alt="" className='w-6' />
                110 allée de la Babonnelle, Mesanger
            </div>


        </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Fabrice.R . All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href=''></a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer