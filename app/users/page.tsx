import React from 'react';
import UserTable from './UserTable';
interface sortOrder {
  params:{sortOrder:string}
}
const UsersPage = ({params:{sortOrder}}:Props) => {
  console.log(sortOrder)
  return (
    <main className='m-3 '>  
      <h1>Lists of the users</h1>
      <UserTable />
    </main>
  )
}

export default UsersPage