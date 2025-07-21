import User from '../models/User.js';
import ClaimHistory from '../models/ClaimHistory.js';
export const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;
  await User.findByIdAndUpdate(userId, { $inc: { totalPoints: points } });
  const history = new ClaimHistory({ userId, points });
  await history.save();
  res.json({ points });
};
export const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};