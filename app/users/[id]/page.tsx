import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: number };
}

const UserDetailsPage: React.FC<Props> = ({ params: { id } }: Props) => {
  if (id > 10) {
    return notFound(); 
  }

  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
