import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
    <div className='text-center'>
      © 2023 Facebook. All rights reserved.
    </div>
    <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/Profile'><li>Profile</li></Link>
        <Link href='/messages'><li>Messages</li></Link>
        <Link href='/notifications'><li>Notifications</li></Link>
    </ul>
    </nav>
  )
}

export default Footer
