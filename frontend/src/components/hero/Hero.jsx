import React from "react"
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { homeContent } from "../assets/data/dummydata"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='absolute top-1/2 right-8 w-16 h-16 flex items-center justify-center border-2 border-white rounded-full'>
      <button onClick={onClick}>
        <MdOutlineKeyboardArrowRight size={50} className='text-white' />
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='absolute top-1/2 z-10 left-8 w-16 h-16 flex items-center justify-center border-2 border-white rounded-full'>
      <button onClick={onClick}>
        <MdKeyboardArrowLeft size={50} className='text-white' />
      </button>
    </div>
  )
}
export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        className='slick-round'
        style={{
          position: "absolute",
          bottom: "20px",
          zIndex: "5",
        }}
      >
        <ul style={{ margin: "5px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          border: "2px white solid",
          borderRadius: "50%",
        }}
      >
        <span className='w-2 h-2 bg-white rounded-full'>
          <label className='hidden'>{i}</label>
        </span>
      </div>
    ),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          cssEase: "linear",
        },
      },
    ],
  }
  return (
    <>
      <section className='home h-[85vh] overflow-hidden bg-red-100 mobile:h-[50vh]'>
        <Slider {...settings}>
          {homeContent.map((item, index) => (
            <div className='box relative' key={index}>
              <div className='images w-full h-[85vh] mobile:h-[50vh]'>
                <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
              </div>
              <div className='text absolute w-4/5 top-0 left-32 md:left-24 mobile:left-8 text-white flex items-center justify-center text-center h-full flex-col mobile:h-[50vh]'>
                <h1 className='text-[60px] text-yellow md:text-3xl my-5 font-semibold capitalize'>{item.title}</h1>
                <p className='text-lg capitalize mobile:text-sm mobile:leading-7'>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}
