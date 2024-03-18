'use client'
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <Navbar fluid className='bg-blue-900 text-white' rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold  ">ISTAD</span>
      </NavbarBrand>
      <NavbarToggle />
      <span className='text-xl'>
      <NavbarCollapse >
        <NavbarLink className='text-white' href="/" >
          Home
        </NavbarLink>
        <NavbarLink className='text-white' as={Link} href="/enroll">
          Enroll
        </NavbarLink>
        <NavbarLink className='text-white' href="/course">Course</NavbarLink>
        <NavbarLink  className='text-white' href="/itnews">IT News</NavbarLink>
        <NavbarLink className='text-white' href="/job">Job Opportunity</NavbarLink>
        <NavbarLink className='text-white' href="/about ">About Us</NavbarLink>
      </NavbarCollapse>
      </span>
    </Navbar>
    
  );
}

