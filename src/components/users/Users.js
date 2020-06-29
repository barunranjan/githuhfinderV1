import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const User = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='userStyle'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default User;
