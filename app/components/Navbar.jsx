import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const pathname = usePathname();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
            window.addEventListener('scroll',()=>{
                if(scrollY>50){
                    setIsScroll(true)
                }else{
                    setIsScroll(false)
                }
            })
        },[])
  return (
    <>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
         flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-90 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
            <Link href="/">
                <Image src={assets.logo} alt="" className='w-28
                cursor-pointer mr-14' />

            </Link>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full
            px-12 py-3 bg-white shadow-lg bg-opacity-90'>
                <li>
                    <Link href={pathname === '/' ? '#top' : '/'}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href={pathname === '/' ? '#chambres' : '/#chambres'}>
                        Chambres
                    </Link>
                </li>
                <li>
                    <Link href={pathname === '/' ? '#environs' : '/#environs'}>
                        Les environs
                    </Link>
                </li>
                <li>
                    <Link href={pathname === '/' ? '#contact' : '/#contact'}>
                        Contact
                    </Link>
                </li>
                
            </ul>

            <div className='flex items-center gap-4'>

              

                <Link href={pathname === '/' ? '#contact' : '/#contact'} className='hidden lg:flex items-center
                gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt="" className='w-3'/>
                </Link>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt="" className='w-6'/>
                </button>

            </div>

        {/*  mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20
        px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition
        duration-500'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

            <li>
                <Link onClick={closeMenu} href={pathname === '/' ? '#top' : '/'}>
                    Accueil
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} href={pathname === '/' ? '#chambres' : '/#chambres'}>
                    Chambres
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} href={pathname === '/' ? '#environs' : '/#environs'}>
                    Les environs
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} href={pathname === '/' ? '#contact' : '/#contact'}>
                    Contact
                </Link>
            </li>

        </ul>


        </nav>

    </>
  )
}

export default Navbar