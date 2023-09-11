import ProfileImage from '../Profile/ProfileImage'

const ThreadsHeader = ({username}) => {
  return (
    <div className='h-30 grid grid-cols-3 mt-6'>
      <div className='flex h-32'>
        <ProfileImage />
      </div>
      <div>
        <h1 className='text-md font-semibold'>{username}</h1>
      </div>
    </div>
  )
}
export default ThreadsHeader
