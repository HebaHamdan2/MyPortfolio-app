"use client"
import Image from 'next/image.js'
import Link from 'next/link.js'
import React, { useRef, useState } from 'react'
import LinkedinIcon from "../../public/linkedin-icon.svg";
import GithubIcon from "../../public/github-icon.svg";
import LeetCodeIcon from "../../public/leetcode.svg"
export const EmailSection = () => {
  const [isSubmit,setIsSubmit]=useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/contact";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
    };

    try {
        const response = await fetch(endpoint, options);
        const res = await response.json();

        if (response.ok) {
            if (formRef.current) {
              formRef.current.reset();
            }
            setIsSubmit(true);
            setTimeout(() => {
              setIsSubmit(false);
            }, 3000);
        } else {
            alert(`Error sending email: ${res.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    } finally {
      setLoading(false); 
    }
};


  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4' id="contact">
        <div><h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!    </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/HebaHamdan2">
          <Image src={GithubIcon}  alt="Github" />
          </Link>
          <Link href="https://www.linkedin.com/in/heba-hamdan2">
          <Image src={LinkedinIcon} alt="LinkedIn" />
          </Link>
      
          <Link className='pt-1' href="https://leetcode.com/u/hebahamdan296/">
          <Image src={LeetCodeIcon} alt="LinkedIn" width="40" height="40" />
          </Link>
        </div>
        </div>
        <div>
          <form className='flex flex-col' ref={formRef} onSubmit={handleSubmit}>
            <div className='mb-6'>
            <label htmlFor="email" className='text-white block text-sm mb-2 font-medium'>Your email</label>
            <input type="email" name='email' id="email" required placeholder='user@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5 ' />
            </div>
            <div className='mb-6'>
            <label htmlFor="subject"  className='text-white block text-sm mb-2 font-medium'>Subject</label>
            <input type="txet" name='subject' id="subject" required placeholder='Subject..' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5 ' />
            </div>
            <div className="mb-6">
              <label htmlFor="message"
              className='text-white block text-sm mb-2 font-medium'
              >Message</label>
              <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5' placeholder='Leave your message here...'/>
            </div>
            <button type='submit' className='bg-pink-300 hover:bg-pink-400 text-white font-medium py-2.5 px-5 rounded-lg w-full ' >Send Message</button>
            {loading && <p className='text-pink-300 text-sm mt-2'>Sending your message...</p>}
          {isSubmit && !loading && <p className='text-green-300 text-sm mt-2'>Email sent successfully!</p>}

          </form>
        </div>
        </section>
  )
}
