import React, { useEffect } from "react"
import { TitleXl } from "../../components/common/ui/Title"
import { SideBarService } from "./Services"
import { RecentBlogPost } from "../blog/Blog"
import { getService } from "../../redux/fetaures/ServiceSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { NavLink, useParams } from "react-router-dom"
import DOMPurify from "dompurify"
import { icons } from "../../components/assets/data/dummydata"
import { Loader } from "../../components/common/Loader"

export const ServicesPage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()

  const { service, isLoading, isError, message } = useSelector((state) => state.service)

  useEffect(() => {
    dispatch(getService(slug))
    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch, slug])

  const timestamp = service?.createdAt
  const options = { year: "numeric", month: "long", day: "numeric" }
  const date = new Date(timestamp).toLocaleDateString("en-US", options)
  return (
    <>
      {isLoading && <Loader />}
      <section className='services relative'>
        <TitleXl title='Service Details' />
        <div className='containers py-16 flex justify-between md:flex-col'>
          <div className='main-content w-[65%] mr-5 md:w-full'>
            <div>
              {service?.image ? (
                <div className='w-full h-96'>
                  <img src={service.image.filePath} alt={service.image.filename} className='w-full h-full rounded-md object-cover' />
                </div>
              ) : (
                <span className='text-sm'>No Image</span>
              )}
            </div>
            <div className='user flex items-center py-5 border-b-[3px] border-yellow'>
              <h3 className='text-lg border-r-2 border-gray-300 pr-8'>
                Written by <span className='text-yellow'>Admin</span>
              </h3>
              <h3 className='text-md pl-8'>{date}</h3>
            </div>
            <h1 className='text-2xl font-semibold my-5'>{service?.title}</h1>
            <div
              className='text-[17px] leading-8 pb-5'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(service?.description),
              }}
            ></div>
            <div className='flex items-center pt-5 border-t-[3px] border-yellow'>
              <h1 className='text-lg font-medium'>Share This Post</h1>
              <ul className='flex'>
                {icons.map((icon, index) => (
                  <li key={index}>
                    <NavLink to={icon.path} target='_blank' className='w-8 h-8 bg-yellow rounded-sm flex items-center justify-center text-white ml-3'>
                      {icon.icon}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='side-content w-[32%] md:w-full md:mt-8'>
            <SideBarService />
            <RecentBlogPost />
            <SideBarTags />
          </div>
        </div>
      </section>
    </>
  )
}

export const SideBarTags = () => {
  const data = [{ text: "Budgeting" }, { text: "Financial Planning" }, { text: "Investment Management" }, { text: "Tax Planning" }, { text: "Retirement Planning" }, { text: "Cash Flow Management" }, { text: "Debt Management" }, { text: "Risk Management" }, { text: "Accounting" }, { text: "Financial Analysis" }, { text: "Financial Reporting" }, { text: "Auditing" }, { text: "Business Valuation" }, { text: "Corporate Finance" }, { text: "Capital Budgeting" }, { text: "Financial Markets" }]
  return (
    <section className='border border-slate-500 p-5 shadow-shadow1 mt-8'>
      <h2 className='font-bold text-xl border-b-4 pb-3 w-10 mb-5 border-yellow'>Tags</h2>
      <ul className='flex flex-wrap gap-3'>
        {data.map((item, index) => (
          <li key={index}>
            <button className='text-sm font-medium bg-gray-100 px-3 py-2 transition ease-in-out duration-700 hover:bg-yellow hover:text-white'>
              <NavLink to='/services'>{item.text}</NavLink>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
