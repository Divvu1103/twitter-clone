import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='flex items-center justify-between'>
                <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
                <RefreshIcon className='mr-5 mt-5 w-8 h-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>

            <div>
               <div>
                <TweetBox/>
                </div> 
            </div>
        </div>
  )
}

export default Feed