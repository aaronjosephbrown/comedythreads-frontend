import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const CommentButton = ({ setOpen , thread, setCommentThread}) => {

  return (
    <button onClick={() => {
      setCommentThread(thread)
      setOpen(true)
    }}>
      <ChatBubbleOvalLeftIcon className='h-5' />
    </button>
  )
}
export default CommentButton
