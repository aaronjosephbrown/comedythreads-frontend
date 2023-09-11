import ProfileImage from '../Profile/ProfileImage'

const ThreadsHeader = ({ username, bio, joined }) => {
  return (
    <section className='h-30 grid grid-cols-4 mt-6'>
      <div className='flex h-32'>
        <ProfileImage />
      </div>
      <div>
        <h1 className='text-md font-semibold'>{username}</h1>
        <div className='mt-5'>
          <p>bio: {bio}</p>
          <p>joined: {joined}</p>
        </div>
      </div>
    </section>
  )
}
export default ThreadsHeader
