import nc from 'next-connect';
import cors from 'cors';

const MOVIE_SEARCH_URL = process.env.REACT_APP_MOVIE_SEARCH_URL;
const API_KEY = process.env.API_KEY;
const MOVIE_QUERY = process.env.MOVIE_QUERY;

const handler = nc()
    .use(cors())
    .get(async (req, res) => {
        // // const response = await fetch(`${MOVIE_SEARCH_URL}${API_KEY}${MOVIE_QUERY}`);
        // const data = await response.json();
        // console.log('*****movie/index data*****: ', data);
        res.json({data: 'Loading...'});
    });

export default handler;
