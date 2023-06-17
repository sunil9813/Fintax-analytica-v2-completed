import React, { useState } from "react"
import { contactdata, icons } from "../../components/assets/data/dummydata"
import { ButtonRound } from "../../components/common/ui/Button"
import { TitleMd, TitleSm, TitleXl } from "../../components/common/ui/Title"
import {
  createInquiry,
  selectIsLoading,
} from "../../redux/fetaures/InquirySlice"
import { Loader } from "../../components/common/Loader"
import { useDispatch, useSelector } from "react-redux"

export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(createInquiry({ name, email, phone, message }))

    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <>
      <section className='team relative'>
        <TitleXl title='Contact' />
        <div className='containers py-16'>
          <div className='grid grid-cols-3 gap-8 mt-10 text-center md:grid-cols-2 mobile:grid-cols-1'>
            {contactdata?.map((items, index) => (
              <div
                key={index}
                className='team-card relative shadow-md rounded-3xl py-8'
              >
                <div className='w-32 h-32 bg-indigo-50 rounded-full mx-auto flex justify-center items-center'>
                  <img
                    src={items.cover}
                    alt={items.title}
                    className=' object-contain w-14'
                  />
                </div>
                <div className='p-8'>
                  <h4 className='text-2xl mb-5 font-meidum'>{items.title}</h4>
                  <p className='text-para'>{items.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.7694170349693!2d85.32029490715084!3d27.66773795854162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19414c0933a3%3A0xce63f400b2d01e32!2sFintax%20Analytica%20Nepal%20Pvt.%20Ltd!5e0!3m2!1sne!2snp!4v1682489548801!5m2!1sne!2snp'
          width='100%'
          title='contact'
          height='350'
          style={{ border: "0" }}
          loading='lazy'
        ></iframe>
        <div className='py-16'>
          <div className='containers flex justify-between md:flex-col'>
            <div className='left w-1/3 md:w-full'>
              <TitleSm title='Get In Touch' />
              <br />
              <TitleMd title='Contact us' /> <br />
              <p>
                Thank you for your interest in contacting us! We are always
                eager to hear from our customers, partners, and community
                members. Whether you have a question, comment, or suggestion, we
                are here to listen and respond to your needs.You can reach us
                through our contact form, or by email, and phone. Our team will
                do our best to respond to your inquiry as soon as possible.
              </p>
              <div className='flex'>
                {icons.map((item, idx) => (
                  <div key={idx} className='mr-3 my-5'>
                    <ButtonRound icon={item.icon} color='secondary' />
                  </div>
                ))}
              </div>
            </div>
            <div className='right w-2/3 ml-16 md:w-full md:ml-0 shadow-shadow1 p-5'>
              {isLoading && <Loader />}
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5 mobile:grid-cols-1'>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Full Name'
                    className='w-full p-3 rounded-lg bg-gray-100 border-none'
                    required
                  />
                  <input
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder='Phone'
                    className='w-full p-3 rounded-lg bg-gray-100 border-none'
                    required
                  />
                </div>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Email'
                  className='w-full p-3 rounded-lg bg-gray-100 border-none my-5'
                  required
                />
                <textarea
                  name='message'
                  cols='30'
                  rows='10'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className='w-full p-3 rounded-lg bg-gray-100 border-none outline-none'
                  required
                ></textarea>
                <button
                  type='submit'
                  className='capitalize bg-primary_sec px-12 mt-3 py-3.5 text-white rounded-xl flex justify-center items-center'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
