import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode
}
const adminPage = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-300'>Here is the sidebar for asmin</aside>
        <div className='bg-sky-100'>{children}</div>
    </div>
  )
}

export default adminPage