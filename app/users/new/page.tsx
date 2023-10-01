'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewPage = () => {
    const router = useRouter()
  return (
    <div>
        <button className='btn'
        onClick={()=> router.push('/users') }>Create</button>
    </div>
  )
}

export default NewPage