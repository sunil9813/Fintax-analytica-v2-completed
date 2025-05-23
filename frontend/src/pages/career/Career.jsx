import React, { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { IoBagHandleOutline } from "react-icons/io5"
import { ButtonPrimary } from "../../components/common/ui/Button"
import { useDispatch, useSelector } from "react-redux"
import { getAllCareers } from "../../redux/fetaures/CareerSlice"
import { toast } from "react-toastify"
import DOMPurify from "dompurify"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Career = () => {
  const dispatch = useDispatch()

  const { careers, isError, message } = useSelector((state) => state.career)

  useEffect(() => {
    dispatch(getAllCareers())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <>
      <section className='carerr bg-gray-100 py-8'>
        <div className='max-w-4xl m-auto md:w-full md:px-8'>
          {careers?.length === 0 ? (
            <div className='min-h-[80vh] flex justify-center items-center'>
              <div className='bg-gray-50 p-8 shadow-md rounded-2xl border-[6px] border-white mb-8'>
                <p className=' leading-8'>We are always looking for talented individuals to join our team and contribute to our mission.If you are passionate about making a difference and want to be part of a dynamic and growing organization, we invite you to explore our current job openings and apply today.</p>
                <br />
                <h1>
                  Drop your resume at
                  <NavLink className='ml-2 text-indigo-500' to='mailto:analyticafintax@gmail.com'>
                    analyticafintax@gmail.com
                  </NavLink>
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className='bg-gray-50 shadow-md pl-3 w-full rounded-lg flex justify-between items-center my-8 border-[6px] border-white'>
                <input type='text' placeholder='type here...' className='text-para py-2.5 w-2/3' />
                <button className='capitalize bg-yellow px-5 py-3 text-white rounded-md'>
                  <BiSearch size={22} />
                </button>
              </div>
              <div className='job-post mt-16'>
                {careers.map((career) => (
                  <JobPost key={career._id} title={career.title} salary={career.salary} desc={career.description} image={career.image} path={career.image.filePath} name={career.image.filename} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export const JobPost = ({ title, salary, desc, path, name, image }) => {
  // popup
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='bg-gray-50 p-8 shadow-md rounded-2xl border-[6px] border-white mb-8'>
        <div className='top flex justify-between items-center mobile:flex-col'>
          <div className='top-left flex items-center'>
            <span>
              <IoBagHandleOutline size={22} />
            </span>
            <h3 className='text-lg font-medium ml-5'>{title}</h3>
          </div>
          {salary && (
            <div className='top-right flex items-center mobile:w-full'>
              <span className='mr-3 text-yellow'>Rs</span>
              <span>
                {salary} / <label className='text-gray-400'>Month</label>
              </span>
            </div>
          )}
        </div>
        <div className='bottom-left flex items-center mobile:flex-wrap my-5'>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc.slice(0, 50)),
            }}
          ></div>
        </div>
        <div className='bottom flex justify-between items-center md:flex-wrap mobile:flex-col'>
          <button onClick={toggleModal} className='mt-5 bg-gray-100 px-8 py-2.5 text-sm font-medium rounded-[5px] uppercase mr-5 mobile:mb-2'>
            Show More
          </button>
          <div className='bottom-right flex items-center md:mt-5 mobile:mt-5'>
            <NavLink to='mailto:analyticafintax@gmail.com' className='bottom-right flex items-center md:mt-5 mobile:mt-5'>
              <ButtonPrimary text='Apply Now' color='bg-yellow' />
            </NavLink>
          </div>
        </div>
      </div>

      {modal && (
        <div className='modal p-8'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content flex justify-between flex-col'>
            <div className='modal-text right  '>
              <h1 className='capitalize text-yellow font-medium'>{title}</h1>
              {salary && (
                <div className='top-right flex items-center mobile:w-full mb-3'>
                  <span className='mr-3 text-secondary text-2xl font-medium'>Rs {salary}</span>
                  <span>
                    / <label className='text-gray-400'>Month</label>
                  </span>
                </div>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(desc),
                }}
              ></div>

              <button className='close-modal text-red-500' onClick={toggleModal}>
                <AiOutlineCloseCircle size={30} />
              </button>

              <NavLink to='mailto:sunilpokhrel797@gmail.com' className='bottom-right flex items-center md:mt-5 mobile:mt-5'>
                <ButtonPrimary text='Apply Now' color='bg-indigo-500' />
              </NavLink>
              <br />
            </div>
            <div className='modal-img flex justify-center items-center'>
              <div className='h-auto'>
                {image ? (
                  <img src={path} alt={name} className='object-fit w-full h-full rounded-3xl' />
                ) : (
                  <div className='bg-yellow h-full w-full rounded-3xl flex justify-center items-center'>
                    <h1 className='text-img-none font-bold'>FA</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
