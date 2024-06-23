import React from 'react'
import { MainFooterLinks } from '@/constants'
import Link from 'next/link'
import MainLogo from './LogoSVGs/MainLogo'

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center px-4 min-h-[10vh]
    bg-[#e18cb634] font-nunito lowercase text-sm text-white">
        <ul className="flex flex-row gap-4">
            {MainFooterLinks.map((link)=> (
                <li key={"footer link "+link.text}>
                    <Link href={link.href}>{link.text}</Link>
                </li>
            ))}
        </ul>

        <span className="flex flex-row gap-2">
            <MainLogo color="#ffff" size="20px" />
            <p>Amira Designs</p>
        </span>


    </footer>
  )
}

export default Footer