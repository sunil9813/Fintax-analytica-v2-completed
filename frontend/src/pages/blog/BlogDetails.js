import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { getBlog } from "../../redux/fetaures/BlogSlice"
import { toast } from "react-toastify"
import { Loader } from "../../components/common/Loader"
import DOMPurify from "dompurify"
import { TitleXl } from "../../components/common/ui/Title"
import { SideBarService } from "../services/Services"
import { RecentBlogPost } from "./Blog"
import { SideBarTags } from "../services/ServicesPage"
import { icons } from "../../components/assets/data/dummydata"

const BlogDetails = () => {
  const dispatch = useDispatch()

  const { slug } = useParams()

  const { blog, isLoading, isError, message } = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(getBlog(slug))

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch, slug])

  const timestamp = blog?.createdAt
  const options = { year: "numeric", month: "long", day: "numeric" }
  const date = new Date(timestamp).toLocaleDateString("en-US", options)
  return (
    <>
      <section className='services relative'>
        <TitleXl title='Blog Details' />
        {isLoading && <Loader />}

        <div className='containers py-16 flex justify-between md:flex-col'>
          <div className='main-content w-[65%] mr-5 md:w-full'>
            <div>
              {blog?.image ? (
                <div className='w-full h-96'>
                  <img src={blog.image.filePath} alt={blog.image.filename} className='w-full h-full rounded-md object-cover' />
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
            <h1 className='text-2xl font-semibold my-5'>{blog?.title}</h1>
            <div
              className='text-[17px] leading-8 pb-5'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog?.description),
              }}
            ></div>
            <div className='flex items-center py-5 border-t-[3px] border-yellow'>
              <h1 className='text-lg font-medium'>Share This Post</h1>
              <ul className='flex'>
                {icons.map((icon, index) => (
                  <li key={index}>
                    <NavLink to='/' className='w-8 h-8 bg-yellow rounded-sm flex items-center justify-center text-white ml-3'>
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

export default BlogDetails
