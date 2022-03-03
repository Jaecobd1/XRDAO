import React from 'react'
import Logo from '../public/Images/AltLogo-NB.png'
import Image from 'next/image'



function LogoIMG() {
    return (
        <div>
             <Image height='80%' width='80%' objectFit="contain"
               src={Logo}
               />
        </div>
    )
}

export default LogoIMG
