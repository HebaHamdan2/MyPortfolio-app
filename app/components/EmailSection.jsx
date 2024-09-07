import Image from 'next/image.js'
import Link from 'next/link.js'
import React from 'react'

export const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4'>
        <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis eum natus quia labore iste enim officiis sequi quam nulla, cum quasi impedit eos placeat blanditiis beatae animi quos accusamus!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="">
          <Image src="" alt="Github" />
          </Link>
          <Link href="">
          <Image src="" alt="LinkedIn" />
          </Link>
        </div>
        </div>
        <div>
          <form className='flex flex-col'>
            <div className='mb-6'>
            <label htmlFor="email" className='text-white block text-sm mb-2 font-medium'>Your email</label>
            <input type="email" id="email" required placeholder='user@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5 ' />
            </div>
            <div className='mb-6'>
            <label htmlFor="subject"  className='text-white block text-sm mb-2 font-medium'>Subject</label>
            <input type="txet" id="subject" required placeholder='Subject..' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5 ' />
            </div>
            <div className="mb-6">
              <label htmlFor="message"
              className='text-white block text-sm mb-2 font-medium'
              >Message</label>
              <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5' placeholder='Leave your message here...'/>
            </div>
            <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ' >Send Message</button>
          </form>
        </div>
        </section>
  )
}
