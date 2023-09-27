"use client"
import React from 'react'
import Link from 'next/link';
import {Navbar,  NavbarContent, NavbarItem,Button, NavbarBrand,} from "@nextui-org/react";
import { ModeToggle } from './themeToggle';
import { useTheme } from 'next-themes';


const Header = () => {
  const {theme}=useTheme()
  return (
    <>
    
    <Navbar maxWidth='2xl' shouldHideOnScroll>
      <NavbarBrand className='mt-4' >
     {/* <Image className='mt-4' src={"/logo.png"} width={130} height={130} alt='' /> */}
     <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="130"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="130"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="bbc46a6a82">
              <path
                d="M 122.332031 97.945312 L 252.832031 97.945312 L 252.832031 205.945312 L 122.332031 205.945312 Z M 122.332031 97.945312 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#bbc46a6a82)">
            <path
              fill={theme === 'dark' || theme === 'system' ? '#ffffff' : '#000000'}
              d="M 186.710938 129.804688 L 186.710938 197.992188 L 197.734375 190.976562 L 197.734375 136.847656 L 202.078125 136.847656 L 202.078125 193.367188 L 182.371094 205.914062 L 182.371094 125.453125 L 239.050781 125.453125 L 245.265625 114.804688 L 184.527344 114.804688 L 184.527344 110.457031 L 252.84375 110.457031 L 241.546875 129.804688 Z M 137.910156 102.324219 L 232.664062 102.324219 L 227.882812 97.976562 L 135.449219 97.976562 L 122.332031 120.03125 L 166.4375 120.03125 L 166.4375 194.707031 L 170.78125 199.085938 L 170.78125 115.675781 L 129.972656 115.675781 Z M 137.910156 102.324219 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      
      </NavbarBrand>
      <NavbarContent className=" hidden sm:flex gap-4 items-center" justify="center">
      <NavbarItem isActive>

<Button className="p-0.5 rounded " color="primary" variant="light">
    <Link  className='' aria-current="page" href={"/"}>

Home
    </Link>
</Button>
</NavbarItem>

<NavbarItem>

<Button className="p-0.5 rounded" color="primary" variant="light">
<Link  href={"/portfolio"}>

Portfolio
</Link>
</Button>
</NavbarItem>
<NavbarItem>
<ModeToggle />
</NavbarItem>
      </NavbarContent>
     
    </Navbar>  
    </>
  )
}

export default Header