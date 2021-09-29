/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { useRouter } from 'next/router';
import {Button, Flex, Grid, Input, jsx} from "theme-ui";

// console.log('*****MOVIE_SEARCH_URL*****: ', MOVIE_SEARCH_URL);
const Search = () => {
    const [movie, setMovie] = useState("");
    const router = useRouter();

    return (
        <div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await router.push('/movie/[movie]', `/movie/${movie}`);
                    // await searchMovie(movie);
                }}
            >
                <Grid columns={['3fr 1fr']}>
                    <Input
                        id="movie"
                        onChange={(e) => {setMovie(e.target.value)}}
                        value={movie}
                        placeholder='Begin Your Movie Search!'
                        autofillBackgroundColor="highlight"
                    >
                    </Input>
                <Button>Find It!</Button>
                {/*<button>Find It!</button>*/}
                </Grid>
            </form>
        </div>
    );
}

const searchMovie = async (findMovie) => {
    // console.log('*****MOVIE_SEARCH_URL*****: ', MOVIE_SEARCH_URL);
    // console.log('*****API_KEY*****: ', API_KEY);
    const movieStream = await fetch(`http://localhost:3000/api/movie/${findMovie}`);
    console.log('*****movieStream*****: ', movieStream);
    const {results: {0: movie} } = await movieStream.json();
    // const movie = await fetch(`${MOVIE_URL}/search${API_KEY}${MOVIE_QUERY}${findMovie}`);
    // console.log('*****url*****: ', `${MOVIE_URL}/search${API_KEY}${MOVIE_QUERY}${findMovie}`);
    console.log('*****Movie*****: ', movie);
}


export default Search;
