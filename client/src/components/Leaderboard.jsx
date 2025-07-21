import React from 'react';
function Leaderboard({ leaderboard }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Leaderboard;