import { useState, useEffect } from 'react'
import { UserIcon } from '@heroicons/react/24/solid'

const ProfileImage = ({ height = 14 }) => {
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    setProfileImage(`https://i.pravatar.cc/150?img=3`)
  }, [setProfileImage])

  const ProfileImageContainer = ({ children }) => {
    return <div className='p-5'>{children}</div>
  }

  if (profileImage) {
    return (
      <ProfileImageContainer>
        <img
          className={`rounded-full outline outline-white h-${height}`}
          src={profileImage}
          alt='profileImage'
        />
      </ProfileImageContainer>
    )
  }

  return (
    <ProfileImageContainer>
      <UserIcon
        className={`rounded-full outline outline-white text-white h-${height}`}
      />
    </ProfileImageContainer>
  )
}

export default ProfileImage
