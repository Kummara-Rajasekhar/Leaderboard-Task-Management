import React, { useState } from 'react';
import axios from 'axios';
function ClaimButton({ selectedUser, fetchLeaderboard }) {
  const [points, setPoints] = useState(null);
  const handleClaim = async () => {
    const res = await axios.post('http://localhost:5000/api/claim', { userId: selectedUser });
    setPoints(res.data.points);
    fetchLeaderboard();
  };
  return (
    <div>
      <button onClick={handleClaim} disabled={!selectedUser}>Claim Points</button>
      {points && <p>Claimed {points} points!</p>}
    </div>
  );
}
export default ClaimButton;
