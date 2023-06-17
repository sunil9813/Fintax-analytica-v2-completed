import React, { useEffect } from "react"
import { TitleMd, TitleSm, TitleXl } from "../../components/common/ui/Title"
import { Loader } from "../../components/common/Loader"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { getAllTeams } from "../../redux/fetaures/TeamSlice"

export const Team = () => {
  const dispatch = useDispatch()

  const { teams, isLoading, isError, message } = useSelector((state) => state.team)

  useEffect(() => {
    dispatch(getAllTeams())

    if (isError) {
      toast.error(message)
    }
  }, [isError, message, dispatch])

  return (
    <>
      <section className='team relative'>
        <TitleXl title='Team' />
        <div className='containers py-16'>
          <div className='text-center'>
            <TitleSm title='Our Team Member' />
            <TitleMd title='Meet Our Amazing Team' />
          </div>

          {isLoading && <Loader />}
          <div className='grid grid-cols-4 gap-8 mt-10 md:grid-cols-2 mobile:grid-cols-1'>
            {teams.map((items) => (
              <div className='team-card relative rounded-md shadow-shadow2' key={items._id}>
                <div className='team-card-img w-full object-cover bg-[#E3E3E3]'>
                  {items?.image ? (
                    <img src={items.image.filePath} alt={items.image.filename} className='w-full h-full rounded-md object-cover' />
                  ) : (
                    <div className='bg-[#E3E3E3] h-full w-full rounded-md flex justify-center items-center '>
                      <h1 className='font-bold'>Fintax Analytica</h1>
                    </div>
                  )}
                </div>
                <div className='details mx-5 py-8 border-b-4 border-yellow'>
                  <h2 className='text-xl font-medium my-2 capitalize'>{items.post}</h2>
                  <p className='uppercase text-primary'>{items.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
