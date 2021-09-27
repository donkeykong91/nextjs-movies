import nc from 'next-connect';
import cors from 'cors';
import axios from 'axios';

const MOVIE_URL = process.env.MOVIE_URL;
const API_KEY = process.env.API_KEY;
const handler = nc()
.use(cors())
.get(async (req, res) => {
        // const {data: results} = await axios.get(`${MOVIE_URL}/popular${API_KEY}&/discover/movie&language=en-US`);
        const response = await fetch(`${MOVIE_URL}/popular${API_KEY}&/discover/movie&language=en-US`);
        const data = await response.json();
        // const { results: popularMoviesListRaw } = await fetch(`${MOVIE_URL}/popular${API_KEY}&/discover/movie&language=en-US`);
        // console.log('*****data*****: ', results);
        // console.log('*****data*****: ', await data.json());
        // console.log('*****popularMoviesListRaw*****: ', popularMoviesListRaw);
        // const popularMoviesList = await popularMoviesListRaw.json();
        // console.log('*****PopularMoviesList*****: ', popularMoviesList);
        res.json({data});
        // res.send(popularMoviesList);
        // res.send('Hello world')
    });
    // .post((req, res) => {
    //     res.json({ hello: 'world' })
    // })
    // .put(async (req, res) => {
    //     res.end('hello')
    // })

export default handler;
