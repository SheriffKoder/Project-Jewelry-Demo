import React from 'react'
import Link from 'next/link'

import { MainNavLinks } from '@/constants'
import MainLogo from './LogoSVGs/MainLogo'

const Header = () => {
  return (
    <header className="pl-2 pr-2 pt-4 pb-8 text-[#ffffff]"
    style={{background: "linear-gradient(180deg, rgba(0,0,0,0.23) 0%, rgba(0,0,0,0.115) 30%, rgba(0,0,0,0.04) 70%, rgba(0,0,0,0) 100%)"}}>

        <nav className="flex flex-row justify-between">
            <div className="flex flex-row gap-1">
                <span className="mt-[-0.25rem]">
                    <MainLogo color="ffff" size="20px"/>
                </span>
                <p className="font-write tracking-wider text-xs mt-[-0.125rem]">Amira jewelery</p>
            </div>

            <ul className="flex flex-row gap-4 uppercase text-xs">
                { MainNavLinks.map((link) => (
                    <li key={"main navigation link "+link.text}>
                        <Link href={link.href}
                        className={`${link.type === "button" ? 'px-3 py-1 bg-[#e18cb6] rounded-full text-white' : null}`}>{link.text}</Link>
                    </li>
                ))}
            </ul>

        </nav>
    </header>
  )
}

export default Header