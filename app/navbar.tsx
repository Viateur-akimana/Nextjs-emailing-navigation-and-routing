'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
const NavBar = () => {
  const {data:session,status} = useSession();
  return (
    <div className='flex bg-white p-4 m-4 text-center space-x-3 '>
     <Link href='/' className='btn btn-primary'>Next.js</Link>
     <Link href='/users' className='btn btn-success'>Users</Link>
     {status ==="loading" && <div>Loading...</div> }
     {status === "authenticated" && <div>{session.user!.name}</div> }
     {status === "unauthenticated" && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default NavBar