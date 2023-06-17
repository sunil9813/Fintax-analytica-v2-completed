import React from "react"
import { Hero } from "../../components/hero/Hero"
import { ServicesCard } from "../services/Services"
import { AboutCard, AboutFeatures, CompantAnalysis } from "../about/About"
import { BlogCard } from "../blog/Blog"
import { NavLink } from "react-router-dom"
import { ButtonPrimary } from "../../components/common/ui/Button"

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <ServicesCard show={3} />
      <div className='flex items-center justify-center mb-12'>
        <NavLink to='/services'>
          <ButtonPrimary text='View All' color='bg-primary_sec' />
        </NavLink>
      </div>
      <div className='text-center'>
        <h3 className='text-yellow mb-2 text-xl'>Latest News & Blog</h3>
        <h1 className='text-4xl font-semibold relative'>Read Our Latest Articles</h1>
      </div>
      <BlogCard show={3} />
      <div className='flex items-center justify-center mb-12'>
        <NavLink to='/blog'>
          <ButtonPrimary text='View All' color='bg-primary_sec' />
        </NavLink>
      </div>
      <CompantAnalysis />
      <AboutFeatures />
    </>
  )
}
