import React from 'react';
import Link from  "next/link";
import { sort } from 'fast-sort';

//this is  the interface
interface User{
    id:number;
    name:string;
    email:string;
}
interface Props{
    sortOrder:string;
}

const getAllUsers = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

const userTable = async({sortOrder}:Props) => {
    const users:User[] = await getAllUsers()
    const sortedUser = sort(users).asc(sortOrder === "email" ? user => user.email : user => user.name)
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
    {sortedUser.map(user => <tr className='mx-2 py-0' key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr> )}
  </tbody>
</table>
    </div>
  )
}

export default userTable