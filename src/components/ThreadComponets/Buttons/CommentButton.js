import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const CommentButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(true)}>
      <ChatBubbleOvalLeftIcon className='h-5' />
    </button>
  )
}
export default CommentButton
