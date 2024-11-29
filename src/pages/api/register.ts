import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, dateOfBirth, username, password, email } = req.body;

    // Add validation and hashing for password

    try {
      const result = await query(
        'INSERT INTO users (first_name, last_name, phone_number, date_of_birth, username, password, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [firstName, lastName, phoneNumber, dateOfBirth, username, password, email]
      );
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
