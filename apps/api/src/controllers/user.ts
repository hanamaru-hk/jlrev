
import { Request, Response } from 'express';
import { query } from '../db';

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        // const result = await query('SELECT * FROM users WHERE google_id = $1', [userId]);
        // if (result.rows.length === 0) {
        //     return res.status(404).json({ error: 'User not found' });
        // }
        // res.json(result.rows[0]);

        // Mock response
        res.json({
            id: userId,
            name: "Test User",
            email: req.user?.email,
            picture: "https://via.placeholder.com/150"
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        const { name, picture } = req.body;
        // await query('UPDATE users SET name = $1, picture = $2 WHERE google_id = $3', [name, picture, userId]);
        // res.json({ success: true });

        res.json({ success: true, message: "Profile updated (mock)" });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getHistory = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        // const result = await query('SELECT * FROM history WHERE user_id = $1', [userId]);
        // res.json(result.rows);

        res.json([
            { id: 1, action: "Login", timestamp: new Date().toISOString() },
            { id: 2, action: "Viewed Question Bank 1", timestamp: new Date().toISOString() }
        ]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateHistory = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.userId;
        const { action } = req.body;
        // await query('INSERT INTO history (user_id, action) VALUES ($1, $2)', [userId, action]);
        // res.json({ success: true });

        res.json({ success: true, message: "History updated (mock)" });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
