import React from 'react'
import {
    BellIcon,
    HomeIcon,
    UserIcon,
    MailIcon,
    CollectionIcon,
    BookmarkIcon,
    HashtagIcon,
    DotsCircleHorizontalIcon,
  } from '@heroicons/react/outline'
  import { signIn, signOut, useSession } from 'next-auth/react'
  import { useRouter } from 'next/router'
  import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
         <img className='h-10 w-10 m-3' src="https://links.papareact.com/drq" alt="" />
       <SidebarRow title='Home' Icon={HomeIcon}/>
       <SidebarRow title="Explore" Icon={HashtagIcon} />
      <SidebarRow title="Notifications" Icon={BellIcon} />
      <SidebarRow title="Messages" Icon={MailIcon} />
      <SidebarRow title="Bookmarks" Icon={BookmarkIcon} />
      <SidebarRow title="Lists" Icon={CollectionIcon} />
      <SidebarRow
        onClick={session ? signOut : signIn}
        title={session ? 'Sign Out' : 'Sign In'}
        Icon={UserIcon}
      />

    </div>
  )
}

export default Sidebar