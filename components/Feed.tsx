import React ,{useState}from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'
import { Tweet } from '../typings'
import TweetComponent from './Tweet';
import toast from 'react-hot-toast'
import { fetchTweets } from '../utils/fetchTweets'
interface Props {
  tweets: Tweet[]
}

function Feed({ tweets:tweetsProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps)
  const handleRefresh = async()=>{
    const refreshToast = toast.loading('Refreshing...')
    const tweet = await fetchTweets()
    setTweets(tweet)
    toast.success('Feed Updated!', {
      id: refreshToast,
    })
  }
  return (
    <div className='col-span-7 max-h-screen overflow-scroll  scrollbar-hide  lg:col-span-5 border-x '>
      <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon onClick={handleRefresh} className='mr-5 mt-5 w-8 h-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
      </div>

      <div>
        <div>
          <TweetBox setTweets={setTweets} />
        </div>
      </div>
      <div>
        {tweets.map(tweet=>(
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}

      </div>
    </div>
  )
}

export default Feed