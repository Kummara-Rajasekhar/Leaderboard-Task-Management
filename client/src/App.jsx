import React, { useState, useEffect } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };
  const fetchLeaderboard = async () => {
    const res = await axios.get('http://localhost:5000/api/leaderboard');
    setLeaderboard(res.data);
  };
  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <div className="p-4">
      <UserSelector users={users} setSelectedUser={setSelectedUser} fetchUsers={fetchUsers} />
      <ClaimButton selectedUser={selectedUser} fetchLeaderboard={fetchLeaderboard} />
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}
export default App;
