import React from 'react';
import Link from  "next/link";

//this is  the interface
interface User{
    id:number;
    name:string;
    email:string;
}
const getAllUsers = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

const userTable = async() => {
    const users:User[] = await getAllUsers()
  return (
    <div>
        <table className='table table-border border-black'>
  <thead>
    <tr>
    <th>
      <Link href="users?sortOrder=name" >Name</Link>
    </th>
    <th>
      <Link href="users?sortOrder=email" >Email</Link>
    </th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => <tr className='mx-2 py-0' key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr> )}
  </tbody>
</table>
    </div>
  )
}

export default userTable