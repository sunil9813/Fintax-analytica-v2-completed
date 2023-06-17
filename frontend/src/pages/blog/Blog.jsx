import React, { useEffect } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { TitleXl } from "../../components/common/ui/Title"
import { useDispatch, useSelector } from "react-redux"
import { getAllBlogs } from "../../redux/fetaures/BlogSlice"
import { toast } from "react-toastify"
import { Loader } from "../../components/common/Loader"
import DOMPurify from "dompurify"

export const Blog = () => {
  return (
    <>
      <section className='team relative'>
        <TitleXl title='Blog' />
        <BlogCard />
      </section>
    </>
  )
}
export const BlogCard = ({ show }) => {
  const dispatch = useDispatch()

  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(getAllBlogs())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <div className='containers py-16'>
      {isLoading && <Loader />}
      <div className='grid grid-cols-3 gap-8 md:grid-cols-2 mobile:grid-cols-1'>
        {!isLoading && blogs?.length === 0 ? (
          <h2>No Blog Found!</h2>
        ) : (
          blogs.slice(0, show).map((blog) => {
            return (
              <div className='team-card relative rounded-[6px]  border-l border-r border-b ' key={blog._id}>
                <div className='h-60'>
                  {blog?.image ? (
                    <img src={blog.image.filePath} alt={blog.image.filename} className='object-cover w-full h-full rounded-[6px]' />
                  ) : (
                    <div className='bg-indigo-500 h-full w-full rounded-[6px] flex justify-center items-center '>
                      <h1 className='text-img-none font-bold'>FA</h1>
                    </div>
                  )}
                </div>
                <div className='blog-details py-3 px-4 rounded-b-[6px] border-dashed border-[#d6d2da]'>
                  <h3 className='text-lg font-medium my-3 text-secondary transition-all cursor-pointer ease-in-out hover:text-indigo-500'>{blog?.title?.slice(0, 40)}...</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.description.slice(0, 150)),
                    }}
                  ></div>
                  <div className='my-4 flex items-center justify-between'>
                    <div className='flex items-center font-semibold text-md text-yellow'>
                      <NavLink to={`/blog/${blog.slug}`}>Read More</NavLink>
                      <HiArrowNarrowRight size={20} className='ml-1' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
export const RecentBlogPost = () => {
  const dispatch = useDispatch()

  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(getAllBlogs())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <section className='border border-slate-500 p-5 mt-8 shadow-shadow1'>
      <h2 className='font-bold text-xl border-b-4 pb-3 w-32 mb-5 border-yellow'>Recent Posts</h2>
      {!isLoading && blogs?.length === 0 ? (
        <h1>No Blog Found!</h1>
      ) : (
        blogs.slice(0, 3).map((blog, index) => {
          const { createdAt } = blog
          const timestamp = createdAt
          const options = { year: "numeric", month: "long", day: "numeric" }
          const date = new Date(timestamp).toLocaleDateString("en-US", options)
          return (
            <div className='box mb-5' key={index}>
              <div className='flex items-center'>
                <div>
                  {blog?.image ? (
                    <div className='w-24 h-24'>
                      <img src={blog.image.filePath} alt={blog.image.filename} className='object-cover w-full h-full rounded-md' />
                    </div>
                  ) : (
                    <span className='text-sm'>No Image</span>
                  )}
                </div>
                <div className='text ml-5'>
                  <h4 className='text-md font-medium'>
                    <NavLink to={`/blog/${blog.slug}`}>{blog.title}</NavLink>
                  </h4>
                  <h4 className='text-sm font-medium mt-2 text-slate-500 '>{date}</h4>
                </div>
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}
export const RecentBlogPostFooter = () => {
  const dispatch = useDispatch()

  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(getAllBlogs())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <section>
      <h2 className='font-bold text-xl border-b-4 pb-3 w-32 mb-5 border-yellow'>Recent Posts</h2>
      {!isLoading && blogs?.length === 0 ? (
        <h2>No Blog Found!</h2>
      ) : (
        blogs.slice(0, 2).map((blog, index) => {
          const { createdAt } = blog
          const timestamp = createdAt
          const options = { year: "numeric", month: "long", day: "numeric" }
          const date = new Date(timestamp).toLocaleDateString("en-US", options)
          return (
            <div className='box mb-5' key={index}>
              <div className='flex items-center'>
                <div>
                  {blog?.image ? (
                    <div className='w-24 h-24'>
                      <img src={blog.image.filePath} alt={blog.image.filename} className='object-cover w-full h-full rounded-md' />
                    </div>
                  ) : (
                    <span className='text-sm'>No Image</span>
                  )}
                </div>
                <div className='text ml-5'>
                  <h4 className='text-md font-medium'>
                    <NavLink to={`/blog/${blog.slug}`}>{blog.title}</NavLink>
                  </h4>
                  <h4 className='text-sm font-medium mt-2 text-gray-300 '>{date}</h4>
                </div>
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}
