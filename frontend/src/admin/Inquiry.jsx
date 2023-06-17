import React, { useEffect } from "react"
import { FiPhoneCall, FiUser } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import useRedirectLoggedOutUser from "../components/customeHook/useRedirectLoggedOutUser"
import { toast } from "react-toastify"
import { getAllInquiry } from "../redux/fetaures/InquirySlice"
import { selectIsLoggedIn } from "../redux/fetaures/auth/authSlice"
import { Loader } from "../components/common/Loader"
import { Card } from "../components/common/ui/Design"
import { BiEnvelope } from "react-icons/bi"
import { NavLink } from "react-router-dom"

export const Inquiry = () => {
  useRedirectLoggedOutUser("/login")
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const { inquirys, isLoading, isError, message } = useSelector(
    (state) => state.inquiry
  )
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllInquiry())
    }

    if (isError) {
      toast.error(message)
    }
  }, [isLoggedIn, isError, message, dispatch])

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && inquirys?.length === 0 ? (
        <Card>
          <h1 className='text-2xl'>No Inquiry Found!</h1>
        </Card>
      ) : (
        inquirys.map((inq) => (
          <div
            key={inq._id}
            className='bg-gray-50 p-8 shadow-md rounded-2xl border-[6px] border-white mb-8'
          >
            <div className='items-center grid grid-cols-2 mobile:flex-col'>
              <div className='top-left flex items-center'>
                <span>
                  <FiUser size={22} />
                </span>
                <h3 className='text-lg font-medium ml-5 capitalize'>
                  {inq.name}
                </h3>
              </div>
              <div className='top-left flex items-center my-3'>
                <span>
                  <FiPhoneCall size={22} />
                </span>
                <h3 className='text-lg font-medium ml-5 capitalize'>
                  {inq.phone}
                </h3>
              </div>
              <div className='top-left flex items-center my-3'>
                <span>
                  <BiEnvelope size={22} />
                </span>
                <h3 className='text-lg font-medium ml-5'>{inq.email}</h3>
              </div>
            </div>
            <div className='text-sm leading-5'>
              <p>{inq.message}</p>
            </div>
            <NavLink
              to={`mailto:${inq.email}`}
              className=' block mt-2 text-indigo-500 underline'
            >
              Send
            </NavLink>
          </div>
        ))
      )}
    </>
  )
}
