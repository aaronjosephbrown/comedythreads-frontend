import { UserIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const ProfileImage = ({ h = 14, w = 'auto' }) => {
  const user = localStorage.getItem('user')
  const parsedUser = user ? JSON.parse(user) : null

  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    if (
      parsedUser &&
      parsedUser.avatar &&
      parsedUser.avatar.startsWith('http')
    ) {
      setProfileImage(parsedUser.avatar)
    } else {
      setProfileImage(null)
    }
  }, [profileImage, parsedUser])

  if (parsedUser) {
    return (
      <img
        className={`h-${h} w-${w} rounded-full`}
        src={profileImage}
        alt={''}
      />
    )
  }

  return (
    <UserIcon
      className={`rounded-full outline outline-white text-white h-${h}`}
    />
  )
}

export default ProfileImage
