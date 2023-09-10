import { UserIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProfileImage = () => {
  const localuser = localStorage.getItem('user')
  const parsedUser = localuser ? JSON.parse(localuser) : null

  const { user } = useSelector((state) => state.auth)
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    if (
      parsedUser &&
      parsedUser.avatar &&
      parsedUser.avatar.startsWith('http')
    ) {
      setProfileImage(parsedUser.avatar || user.avatar)
    } else {
      setProfileImage(null)
    }
  }, [profileImage, parsedUser, user])

  if (parsedUser) {
    return (
      <img
        className={`rounded-full object-fill`}
        src={profileImage}
        alt={''}
      />
    )
  }

  return (
    <UserIcon
      className={`rounded-full outline outline-white text-white`}
    />
  )
}

export default ProfileImage
