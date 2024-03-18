 "use client"
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
import { color } from 'framer-motion';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  
  export default function FooterComponent() {
    return (
      <Footer container>
        <div className='w-[100%] text-xl  bg-blue-900 text-[#fff] p-5 h-[250px] '>
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='flex'>
            <img src=" https://istad.co/resources/img/CSTAD_120.png"className='h-20 ' alt="" />
            <h2 className='p-5'>ISTAD</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
              <div className="text-lg ">
                <FooterTitle title="about" className='text-[#fff]' />
                <FooterLinkGroup col>
                  <FooterLink href="#" className='text-[#fff]' >Flowbite</FooterLink>
                  <FooterLink href="#" className='text-[#fff]'>Tailwind CSS</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us " className='text-[#fff]' />
                <FooterLinkGroup col>
                  <FooterLink href="#" className='text-[#fff]'>Github</FooterLink>
                  <FooterLink href="#" className='text-[#fff]'>Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" className='text-[#fff]' />
                <FooterLinkGroup col>
                  <FooterLink href="#" className='text-[#fff]'>Privacy Policy</FooterLink>
                  <FooterLink href="#" className='text-[#fff]'>Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider  />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-[#fff]">
            <FooterCopyright href="#" by="Flowbite™" year={2022} className='text-[#fff]'/>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" className='text-[#fff]' icon={BsFacebook} />
              <FooterIcon href="#" className='text-[#fff]' icon={BsInstagram} />
              <FooterIcon href="#" className='text-[#fff]' icon={BsTwitter} />
              <FooterIcon href="#" className='text-[#fff]' icon={BsGithub} />
              <FooterIcon href="#" className='text-[#fff]' icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  