import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Loader } from "../components/common/Loader"
import { Border, Card, SubHeading, Title } from "../components/common/ui/Design"
import { getTeamId, selectIsLoading, selectTeam, updateTeam } from "../redux/fetaures/TeamSlice"

export const TeamUpdatePages = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const teamEdit = useSelector(selectTeam)

  const [team, setTeam] = useState(teamEdit)
  const [teamImg, setTeamImg] = useState("")
  const [imagePreview, setimagePreview] = useState(null)

  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(getTeamId(id))
  }, [dispatch, id])

  useEffect(() => {
    setTeam(teamEdit)
    setimagePreview(teamEdit && teamEdit.image ? `${teamEdit.image.filePath}` : null)
  }, [teamEdit])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTeam({ ...team, [name]: value })
  }

  const handleImageChange = (e) => {
    setTeamImg(e.target.files[0])
    setimagePreview(URL.createObjectURL(e.target.files[0]))
  }
  const saveTeam = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", team?.name)
    formData.append("post", team?.post)
    if (teamImg) {
      formData.append("image", teamImg)
    }
    await dispatch(updateTeam({ id, formData }))
    await dispatch(getTeamId())
    navigate("/add-team")
  }
  return (
    <>
      <section className='add-services'>
        {isLoading && <Loader />}
        <form onSubmit={saveTeam}>
          <Card>
            <Title>Update Team</Title>
            <Border>
              <div>
                <SubHeading>Name</SubHeading>
                <input type='text' name='name' value={team?.name} onChange={handleInputChange} placeholder='Write your sub title' className='bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0' />
              </div>
              <div>
                <SubHeading>Post</SubHeading>
                <input type='text' name='post' value={team?.post} onChange={handleInputChange} placeholder='Write your sub title' className='bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0' />
              </div>
              <div>
                <SubHeading>Image</SubHeading>
                <input type='file' name='image' onChange={(e) => handleImageChange(e)} className='h-58 bg-gray-100 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 block w-full p-3 outline-0' />
              </div>
              {imagePreview !== null ? (
                <div>
                  <img src={imagePreview} alt='aboutImg' width='100%' height='100%' className='mt-5 rounded-lg w-full h-48 object-cover' />
                </div>
              ) : (
                <p>No Image set for this team</p>
              )}
              <br />
              <button type='submit' className='py-2 px-8 bg-indigo-500 text-white rounded-md'>
                Update
              </button>
            </Border>
          </Card>
        </form>
      </section>
    </>
  )
}
