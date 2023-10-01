import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex bg-white p-4 m-4 text-center space-x-1 '>
     <Link href='/' className='btn btn-primary'>Next.js</Link>
     <Link href='/users' className='btn btn-success'>Users</Link>
    </div>
  )
}

export default NavBar