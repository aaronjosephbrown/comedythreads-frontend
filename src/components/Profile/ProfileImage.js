import { UserIcon } from '@heroicons/react/24/solid'

const ProfileImage = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user?.avatar) {
    return (
      <img
        className={`rounded-full object-fill`}
        src={user?.avatar}
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
