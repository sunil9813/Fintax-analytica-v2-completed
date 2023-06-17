import React, { useState } from "react"
import LogoImg from "../assets/images/Logo.jpg"
import { NavLink } from "react-router-dom"
import { navBar } from "../assets/data/dummydata"
import { ButtonPrimary, ButtonRound } from "./ui/Button"
import { useSelector } from "react-redux"
import { selectName } from "../../redux/fetaures/auth/authSlice"
import { ShowOnLogOut, ShowOnLogin } from "../../routers/HiddenLink"
import { HiMenuAlt1 } from "react-icons/hi"
import { RxCrossCircled } from "react-icons/rx"
import { FaFacebookF } from "react-icons/fa"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const name = useSelector(selectName)

  return (
    <>
      <Head />
      <header className='py-3'>
        <div className='containers flex justify-between items-center'>
          <div className='logo h-12 object-contain'>
            <img src={LogoImg} alt='LogoImg' className='w-full h-full mobile:w-16 mobile:object-contain' />
          </div>
          <nav className={openMenu ? "mobileMenu" : ""}>
            <ul className='flex justify-between items-center'>
              {navBar.map((links, i) => (
                <li className='text-[17px] capitalize font-medium mr-8' key={i} onClick={() => setOpenMenu(null)}>
                  <NavLink to={links.path}>{links.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className='menu-button' onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <RxCrossCircled size={25} /> : <HiMenuAlt1 size={25} />}
          </button>
          <div className='right flex items-center md:hidden mobile:hidden'>
            <ShowOnLogOut>
              <NavLink to='/login'>
                <ButtonPrimary text='Login' color='bg-primary_sec' />
              </NavLink>
            </ShowOnLogOut>
            <ShowOnLogin>
              <NavLink to='/dashboard' className='shadow-shadow1 rounded-full'>
                <ButtonRound icon={name.slice(0, 1)} color='primary_sec' />
              </NavLink>
            </ShowOnLogin>
          </div>
        </div>
      </header>
    </>
  )
}

export const Head = () => {
  return (
    <div className='Head bg-primary_sec text-white mobile:hidden'>
      <div className='containers flex justify-between items-center py-2'>
        <div className='left flex justify-between items-center'>
          <p> Innovative solutions for your financial challenges.</p>
        </div>
        <div className='right flex justify-between items-center'>
          <NavLink to='https://www.facebook.com/Sprameshwor?mibextid=LQQJ4d' target='_blank' className='w-8 h-8 bg-yellow rounded-sm flex items-center justify-center text-white ml-3'>
            <FaFacebookF />
          </NavLink>
          <NavLink rel='canonical' to='https://fiscall.finance/' target='_blank' className='bg-white text-primary_sec font-semibold text-sm w-auto h-8 rounded-sm flex items-center px-3 ml-2 md:hidden'>
            Open Our Product
          </NavLink>
        </div>
      </div>
    </div>
  )
}
