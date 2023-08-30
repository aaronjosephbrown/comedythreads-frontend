import logo from '../../assets/img/comedy-thread-logo.png'

const Loading = () => {
  return (
    <div className='h-screen flex bg-[#101010] justify-center items-center'>
      <img
        src={logo}
        alt='Comedy Threads'
        className='mx-auto h-48 w-auto animate-bounce'
      />
    </div>
  )
}

export default Loading
