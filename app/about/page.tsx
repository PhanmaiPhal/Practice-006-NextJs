import React from 'react';
import { FaBox, FaBullseye, FaComment, FaEye, FaLocationArrow, FaPhone, FaPhoneAlt, FaTelegram, FaTerminal, FaYoutube } from 'react-icons/fa';
import { FaEarDeaf, FaEarthAfrica, FaFacebook, FaLocationDot } from 'react-icons/fa6';

export default function Page() {
  return (
    <main>
      <section className='bg-white flex-row px-[300px] pt-8 pb-4'>
        <div className='flex flex-auto'>
          <FaTerminal/>
        <h6 className='pl-4'> WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</h6>
        </div>
        <p>CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
        <img src="https://istad.co/resources/img/logo_md.png" className='h-60 px-[300px] pt-5' alt="" />
      </section>
      <section className='bg-white px-[300px] pt-16'>
        <div className='flex flex-auto'>
          <FaEye className="i-style" />
          <h6 className='pl-2'>VISION</h6>

        </div>
        <p>Advanced IT Institute in Cambodia</p>
      </section>
      <section className='bg-white flex-row px-[300px] pt-16 '>
        <div className='flex flex-auto'>
        <FaBullseye />
        <h6 className='pl-2'> MISSION</h6>
        </div>
        <p>Provide the latest methodology with high-quality training and mentoring</p>
        <p>Build up the capacity and career of IT experts Cambodia</p>
        <p>Consult and connect CSTAD trainees to top IT careers</p>
      </section>
      <section className='bg-white flex-row px-[300px] pt-16'>
      <div className='flex flex-auto'>
        <FaComment/>
        <h6 className='pl-2'> SLOGAN</h6>
      </div>
        <p>Start your IT Career with CSTAD</p>
      </section>
      <section className='bg-white flex-row px-[300px] pt-16 text-blue-600'>
        <h4>IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h4>
      </section>
      <section className='bg-white flex-row px-[300px] pt-16 pb-8'>
        <div className='flex flex-auto'>
          <FaLocationDot/>
        <p className='pl-2'> No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
        </div>
        <div className='flex flex-auto'>
          <FaPhoneAlt/>
        <p className='pl-2'>(+855) 95 990 910 | (+855) 93 990 910</p>
        </div>
        <div className='flex flex-auto'>
          <FaTelegram/>
        <p className='pl-2'>Telegram Channel</p>
        </div>
        <div className='flex flex-auto'>
          <FaFacebook/>
        <p className='pl-2'>Facebook</p>
        </div>
        <div className='flex flex-auto'>
          <FaBox/>
        <p className='pl-2'>info.istad@gmail.com</p>
        </div>
        <div className='flex flex-auto'>
          <FaEarthAfrica/>
        <p className='pl-2'>www.istad.co</p>
        </div>
        <div className='flex flex-auto'>
          <FaYoutube/>
        <p className='pl-2'>YouTube</p>
        </div>
        
      </section>
    </main>
  )
}
