import express from 'express';
import { validateSQL } from '../utils/validate';

const router = express.Router();

router.post('/check', (req, res) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    const isSafe = validateSQL(query);
    res.json({ query, isSafe });
});

export default router;