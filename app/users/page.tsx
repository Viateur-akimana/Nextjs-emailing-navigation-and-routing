import React from 'react';
import UserTable from './UserTable';

interface SortOrder {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: SortOrder) => {
  return (
    <main className='m-3 '>
      <h1>Lists of the users</h1>
      <UserTable sortOrder={sortOrder} />
    </main>
  );
};

export default UsersPage;
