import nc from 'next-connect';
import cors from 'cors';

const MOVIE_SEARCH_URL = process.env.MOVIE_SEARCH_URL;
const API_KEY = process.env.API_KEY;
const MOVIE_QUERY = process.env.MOVIE_QUERY;

const handler = nc({ attachParams: true })
    .use(cors())
    .get('/api/movie/:movie', async (req, res) => {
            const { movie } = req.params;
            const response = await fetch(`${MOVIE_SEARCH_URL}${API_KEY}${MOVIE_QUERY}${movie}`);
            const data = await response.json();
            res.json(data);
    });

export default handler;
