import express from 'express';
import { claimPoints, getLeaderboard } from '../controllers/claimController.js';
const router = express.Router();
router.post('/claim', claimPoints);
router.get('/leaderboard', getLeaderboard);
export default router;
