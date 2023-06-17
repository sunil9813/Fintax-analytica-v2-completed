import React, { useEffect, useState } from "react"
import { TitleMd, TitleXl } from "../../components/common/ui/Title"
import { BsArrowRight } from "react-icons/bs"
import { GiHumanTarget, GiLaurelsTrophy } from "react-icons/gi"
import { SlLike } from "react-icons/sl"
import { VscFeedback } from "react-icons/vsc"
import { BiTrendingUp } from "react-icons/bi"
import { getAllAbouts } from "../../redux/fetaures/AboutSlice"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import DOMPurify from "dompurify"
import { features } from "../../components/assets/data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about relative'>
        <TitleXl title='About Us' />
        <AboutCard />
        <CompantAnalysis />
        <AboutFeatures />
      </section>
    </>
  )
}

export const AboutCard = () => {
  const dispatch = useDispatch()

  const { abouts, isError, message } = useSelector((state) => state.about)

  useEffect(() => {
    dispatch(getAllAbouts())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <>
      {abouts.map((about, index) => (
        <div key={index} className='containers py-16 flex items-center justify-center md:flex-col md:gap-5 md:py-5'>
          <div className='left w-[520px] h-[395px] md:w-full'>
            {about?.image ? (
              <img src={about.image.filePath} alt={about.image.filename} className='rounded-xl object-cover h-full w-full' width='100%' height='100%' />
            ) : (
              <div className='bg-indigo-500 h-full w-full rounded-3xl flex justify-center items-center '>
                <h1 className='text-img-none font-bold'>FA</h1>
              </div>
            )}
          </div>
          <div className='right w-3/6 ml-16 md:w-full md:m-0'>
            <div className='heading'>
              <TitleMd title={about.title} />
            </div>
            <div
              className='my-8'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(about.description),
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  )
}
export const CompantAnalysis = () => {
  return (
    <div className='company-ach my-16 py-32 bg-primary_sec text-white'>
      <div className='containers'>
        <div className='heading text-center'>
          <p className='text-lg mb-5'>Company Statistics Analysis</p>
          <h1 className='text-5xl'>Our Great Achievement's </h1>
        </div>
        <div className='grid grid-cols-5 gap-7 mt-16 md:grid-cols-3 md:place-items-center md:text-center mobile:grid-cols-1 '>
          <div className='box flex justify-center items-center flex-col text-center'>
            <div className='icons flex items-center justify-center w-32 h-32 bg-white shadow-md rounded-full md:m-auto'>
              <SlLike size={80} className='text-yellow' />
            </div>
            <div>
              <h1 className='text-4xl font-bold mt-5 mb-3'>200 +</h1>
              <h3 className='text-xl font-semibold'>Satisfied Customer</h3>
            </div>
          </div>
          <div className='box flex justify-center items-center flex-col text-center'>
            <div className='icons flex items-center justify-center w-32 h-32 bg-white shadow-md rounded-full md:m-auto'>
              <GiHumanTarget size={80} className='text-yellow' />
            </div>
            <div>
              <h1 className='text-4xl font-bold mt-5 mb-3'>8</h1>
              <h3 className='text-xl font-semibold'>Experience Members</h3>
            </div>
          </div>
          <div className='box flex justify-center items-center flex-col text-center'>
            <div className='icons flex items-center justify-center w-32 h-32 bg-white shadow-md rounded-full md:m-auto'>
              <VscFeedback size={80} className='text-yellow' />
            </div>
            <div>
              <h1 className='text-4xl font-bold mt-5 mb-3'>97 %</h1>
              <h3 className='text-xl font-semibold'>Satisfaction Rate</h3>
            </div>
          </div>
          <div className='box flex justify-center items-center flex-col text-center'>
            <div className='icons flex items-center justify-center w-32 h-32 bg-white shadow-md rounded-full md:m-auto'>
              <BiTrendingUp size={80} className='text-yellow' />
            </div>
            <div>
              <h1 className='text-4xl font-bold mt-5 mb-3'>2 +</h1>
              <h3 className='text-xl font-semibold'>2 + Years Experience</h3>
            </div>
          </div>
          <div className='box flex justify-center items-center flex-col text-center'>
            <div className='icons flex items-center justify-center w-32 h-32 bg-white shadow-md rounded-full md:m-auto'>
              <GiLaurelsTrophy size={80} className='text-yellow' />
            </div>
            <div>
              <h1 className='text-4xl font-bold mt-5 mb-3'>5 +</h1>
              <h3 className='text-xl font-semibold'>Awards Winning</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AboutFeatures = () => {
  return (
    <div className='content containers text-center pb-16'>
      <div className='heading '>
        <p className='text-lg text-yellow'>Great Offer For Customer</p>
        <TitleMd title='Amazing Features' />
      </div>
      <div className='boxs grid grid-cols-3 gap-8 mt-12 md:grid-cols-2 mobile:grid-cols-1'>
        {features.map((item) => (
          <AboutFeaturesCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export const AboutFeaturesCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div key={item.id} className={`box ${readMore ? "h-auto" : "h-[462px]"}   px-8 py-12 rounded-2xl bg-gray-50 border border-orange-200 hover:border-orange-500 transition-all ease-in-out`}>
      <div className='flex items-center justify-center w-40 h-40 m-auto bg-white shadow-md rounded-full'>
        <i className='text-yellow'>{item.icon}</i>
      </div>
      <h2 className='text-2xl mt-10 text-yellow font-semibold'>{item.title}</h2>
      <p className='py-3 text-lg'>{readMore ? item.info : `${item.info.substring(0, 90)}`}</p>
      <button className='flex items-center justify-center w-full capitalize font-semibold' onClick={() => setReadMore(!readMore)}>
        {readMore ? "read less" : "read more"}
        <BsArrowRight className='ml-2' />
      </button>
    </div>
  )
}
