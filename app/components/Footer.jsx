import Link from 'next/link.js'
import React from 'react'

export const Footer = () => {
  return (
  <footer className='footer border z-10 text-center border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
    <div className='container p-6 flex justify-around '>
  <p className='text-white font-semibold text-lg'>&copy; 2024 <Link href="\" className=' hover:text-pink-300 cursor-pointer text-white' >Heba Hamdan.</Link> All rights reserved. </p></div></footer>
  )
}
