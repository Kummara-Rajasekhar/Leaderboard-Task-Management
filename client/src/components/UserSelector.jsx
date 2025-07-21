import React, { useState } from 'react';
import axios from 'axios';
function UserSelector({ users, setSelectedUser, fetchUsers }) {
  const [newUser, setNewUser] = useState('');
  const addUser = async () => {
    await axios.post('http://localhost:5000/api/users', { name: newUser });
    setNewUser('');
    fetchUsers();
  };
  return (
    <div>
      <select onChange={e => setSelectedUser(e.target.value)}>
        <option>Select a user</option>
        {users.map(u => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>
      <input value={newUser} onChange={e => setNewUser(e.target.value)} placeholder="New user" />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}
export default UserSelector;
