import React, { useEffect } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TitleMd, TitleSm, TitleXl } from "../../components/common/ui/Title"
import { useDispatch, useSelector } from "react-redux"
import { getAllServices } from "../../redux/fetaures/ServiceSlice"
import { toast } from "react-toastify"
import DOMPurify from "dompurify"
import { Loader } from "../../components/common/Loader"
import { NavLink } from "react-router-dom"

export const Services = () => {
  return (
    <>
      <section className='services relative'>
        <TitleXl title='Service' />
        <ServicesCard />
      </section>
    </>
  )
}

export const ServicesCard = ({ show }) => {
  const dispatch = useDispatch()

  const { services, isLoading, isError, message } = useSelector((state) => state.service)

  useEffect(() => {
    dispatch(getAllServices())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <div className='containers py-16'>
      <div className='flex items-center justify-center flex-col text-center '>
        <TitleSm title='What we offer' />
        <div className='heading mt-2'>
          <TitleMd title='Key Features For your Financial Management' />
        </div>
      </div>
      {isLoading && <Loader />}
      <div className='grid grid-cols-3 gap-8 mt-10 md:grid-cols-1 mobile:grid-cols-1'>{!isLoading && services?.length === 0 ? <h2>No Services Found!</h2> : services.slice(0, show)?.map((items) => <ServicePost key={items._id} slug={items.slug} title={items.title} description={items.description} image={items.image} path={items.image.filePath} name={items.image.filename} />)}</div>
    </div>
  )
}

export const ServicePost = ({ title, description, path, name, image, slug }) => {
  return (
    <>
      <div className='team-card relative rounded-[8px]  border-l border-r border-b '>
        <div className='h-60'>
          {image ? (
            <img src={path} alt={name} className='object-cover w-full h-full rounded-[8px]' />
          ) : (
            <div className='bg-indigo-500 h-full w-full rounded-[6px] flex justify-center items-center '>
              <h1 className='text-img-none font-bold'>FA</h1>
            </div>
          )}
        </div>
        <div className='blog-details py-3 px-4 rounded-b-[8px] border-dashed border-[#d6d2da]'>
          <h3 className='text-xl font-medium my-3 text-secondary transition-all cursor-pointer ease-in-out hover:text-indigo-500'>{title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description.slice(0, 80)),
            }}
          ></div>
          <div className='my-4 flex items-center justify-between'>
            <div className='flex items-center font-semibold text-md text-yellow'>
              <NavLink to={`/services-details/${slug}`}>Read More</NavLink>
              <HiArrowNarrowRight size={20} className='ml-1' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const SideBarService = () => {
  const dispatch = useDispatch()

  const { services, isLoading, isError, message } = useSelector((state) => state.service)

  useEffect(() => {
    dispatch(getAllServices())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <section className='border border-slate-500 p-5 shadow-shadow1'>
      <h2 className='font-bold text-xl border-b-4 pb-3 w-16 mb-5 border-yellow'>Services</h2>
      <ul>
        {!isLoading && services?.length === 0 ? (
          <h1>No Services Found!</h1>
        ) : (
          services.slice(0, 10).map((items, index) => (
            <li key={index} className='text-[17px] pb-1.5 mb-3 font-medium capitalize hover:text-primary'>
              <NavLink to={`/services-details/${items.slug}`}>
                <span className='mr-1'>{index + 1} . </span>
                {items.title}
              </NavLink>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
