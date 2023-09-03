import { UserIcon } from '@heroicons/react/24/solid'

const ProfileImage = ({ h = 14, w = 'auto' }) => {

  const ProfileImageContainer = ({ children }) => {
    return <div className='p-5'>{children}</div>
  }

  if (localStorage.getItem('user') !== null) {
    return (
      <img
        className={`h-${h} w-${w} rounded-full`}
        src={JSON.parse(localStorage.getItem('user')).avatar}
        alt={''}
      />
    )
  }

  return (
    <ProfileImageContainer>
      <UserIcon
        className={`rounded-full outline outline-white text-white h-${h}`}
      />
    </ProfileImageContainer>
  )
}

export default ProfileImage
