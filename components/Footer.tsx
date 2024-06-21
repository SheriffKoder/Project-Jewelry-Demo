import React from 'react'
import { MainFooterLinks } from '@/constants'
import Link from 'next/link'
import MainLogo from './MainLogo'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center min-h-[10vh]
    bg-[#cf92a1] font-nunito lowercase text-sm">
        <ul className="mx-auto flex flex-row gap-8">
            {MainFooterLinks.map((link)=> (
                <li>
                    <Link href={link.href}>{link.text}</Link>
                </li>
            ))}
        </ul>

        <span className="flex flex-row gap-2 mt-2">
            <MainLogo />
            <p>Amira Designs</p>
        </span>


    </footer>
  )
}

export default Footer