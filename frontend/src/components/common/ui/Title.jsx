import React from "react"

export const TitleXl = ({ title }) => {
  return (
    <>
      <div className='heading-xl capitalize relative h-96 mobile:h-48 w-full flex items-center justify-center flex-col text-white'>
        <h1 className='text-6xl font-semibold relative z-10 mobile:text-2xl'>
          {title}
        </h1>
      </div>
    </>
  )
}
export const TitleMd = ({ title }) => {
  return (
    <>
      <div className='heading-md text-slate-800 capitalize'>
        <h1 className='text-4xl font-semibold relative z-10 mobile:text-xl'>
          {title}
        </h1>
      </div>
    </>
  )
}
export const TitleSm = ({ title }) => {
  return (
    <>
      <div className='heading-sm text-yellow mb-2 capitalize'>
        <h1 className='text-xl font-medium relative z-10 mobile:text-md'>
          {title}
        </h1>
      </div>
    </>
  )
}
