
import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { query } from '../db';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req: Request, res: Response) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();

        if (!payload) {
            return res.status(400).json({ error: 'Invalid token' });
        }

        const { sub, email, name, picture } = payload;

        // Check if user exists
        // const result = await query('SELECT * FROM users WHERE google_id = $1', [sub]);
        // let user = result.rows[0];

        // if (!user) {
        //   // Create user
        //   const newUser = await query(
        //     'INSERT INTO users (google_id, email, name, picture) VALUES ($1, $2, $3, $4) RETURNING *',
        //     [sub, email, name, picture]
        //   );
        //   user = newUser.rows[0];
        // }

        // Mock user for now if DB fails or no schema
        const user = {
            id: sub,
            email,
            name,
            picture
        };

        // Generate JWT
        const jwtToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );

        // Set cookie
        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000 // 1 hour
        });

        return res.json({ user, token: jwtToken });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Authentication failed' });
    }
};
