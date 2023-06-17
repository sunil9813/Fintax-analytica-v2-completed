import React from "react"
import { BiTimeFive } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { icons, navBar } from "../assets/data/dummydata"
import footerImg1 from "../assets/images/shield.png"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { RecentBlogPostFooter } from "../../pages/blog/Blog"

export const Footer = () => {
  return (
    <>
      <footer className='bg-primary_sec py-16 text-white'>
        <div className='containers flex justify-between'>
          <div className='content-grid grid grid-cols-6 gap-5 md:gap-8 md:grid md:grid-cols-2 mobile:grid-cols-1'>
            <div className='box col-span-2'>
              <h1 className='text-6xl font-semibold text-left mobile:text-3xl'>
                Fintax <span className='text-yellow'>Analytica</span>
              </h1>
              <p className='text-lg my-10'>Financial management is the process of managing an organization's financial resources to achieve its goals and objectives.</p>
              <h3 className='text-xl font-medium my-3'>Follow Us</h3>
              <div className='right flex items-center'>
                {icons.map((icons, i) => (
                  <NavLink key={i} to={icons.path} target='_blank' className='w-12 h-12 flex items-center justify-center text-lg bg-[rgba(255,255,255,0.1)] rounded-full mr-3 transition duration-700 ease-in-out hover:bg-yellow'>
                    {icons.icon}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className='box col-span-2'>
              <RecentBlogPostFooter />
            </div>
            <div className='box col-span-1'>
              <h2 className='font-bold text-xl border-b-4 pb-3 w-32 mb-5 border-yellow'>Useful Links</h2>

              <ul className='mt-8'>
                {navBar.slice(0, 5).map((item, index) => (
                  <li key={index} className='mb-3 transition ease-in-out duration-700 capitalize hover:text-yellow hover:cursor-pointer'>
                    <NavLink to={item.path} className='flex items-center text-lg'>
                      <HiOutlineArrowSmRight size={22} />
                      <span className='ml-2'>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='box col-span-1'>
              <h2 className='font-bold text-xl border-b-4 pb-3 w-32 mb-5 border-yellow'>Other Pages</h2>
              <ul className='mt-8'>
                <li className='mb-3 transition ease-in-out duration-700 hover:text-yellow hover:cursor-pointer'>
                  <NavLink to='https://fiscall.finance/' className='flex items-center text-lg'>
                    <HiOutlineArrowSmRight size={22} />
                    <span className='ml-2'>fiscall</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footerBottom bg-slate-900 py-4 mt-16'>
          <div className='containers flex justify-between items-center md:flex-col md:gap-4 mobile:flex-col'>
            <div className='flex items-center mobile:mb-2'>
              <img src={footerImg1} alt='footerImg1' className='w-8 h-8 object-cover mr-3' />
              <p>Copyright 2023, Fintax Analytica. All Rights Reserved</p>
            </div>
            <NavLink rel='canonical' className='transition ease-in-out duration-700 hover:text-indigo-500 hover:cursor-pointer' to='https://apptechnologies.co/' target='_blank'>
              Designed & Developed by
              <span className='ml-1 text-md font-semibold'>App Technologies</span>
            </NavLink>
            <div className='flex justify-end items-center'>
              <i>
                <BiTimeFive size={25} />
              </i>
              <p className='ml-2 transition ease-in-out duration-700 hover:text-indigo-500 hover:cursor-pointer'>Working Hours : Sun-Monday, 09am-5pm</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
