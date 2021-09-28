import nc from 'next-connect';
import cors from 'cors';

const MOVIE_URL = process.env.MOVIE_URL;
const API_KEY = process.env.API_KEY;

const handler = nc()
.use(cors())
    .get(async (req, res) => {
        const response = await fetch(`${MOVIE_URL}/popular${API_KEY}&/discover/movie&language=en-US`);
        const data = await response.json();

        res.json({data});
    });

export default handler;
