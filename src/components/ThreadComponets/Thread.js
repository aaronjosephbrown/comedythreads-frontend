import ProfileImage from '../Profile/ProfileImage'
import { timeSince } from '../../utils/timeSince'
import ThreadDropMenu from './ThreadDropMenu'

const Thread = ({threads, username}) => {
  return (
    <div className='h-30 mt-6'>
      <div className='flex flex-col h-32'>
        <ul className='flex flex-col space-y-5'>
          {threads &&
            threads.toReversed().map((thread, i) => (
              <li
                key={i}
                className='flex justify-between text-sm font-light border-t border-[#777777] pt-2'
              >
                <div className='py-3'>
                  <div className='whitespace-nowrap flex h-10 pr-5 -mb-5'>
                    <ProfileImage />
                    <span className='ml-2 font-semibold'>{username}</span>
                  </div>
                  <div className='pl-12'>
                    <span>{thread.text}</span>
                  </div>
                </div>
                <div className='flex pl-20'>
                  <span className='whitespace-nowrap text-stone-500 font-medium'>
                    {timeSince(thread.createdAt)}
                  </span>{' '}
                  <ThreadDropMenu threadId={thread._id}/>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
export default Thread
