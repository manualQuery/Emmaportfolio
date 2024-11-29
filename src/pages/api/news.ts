import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Fetch news data from an external API or database
    const newsData = [
      { title: 'News Item 1', description: 'Description for news item 1' },
      { title: 'News Item 2', description: 'Description for news item 2' },
      // Add more news items
    ];

    res.status(200).json(newsData);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
