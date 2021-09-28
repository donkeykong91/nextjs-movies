import React from 'react';
import axios from 'axios';
import Popular from '../src/components/Popular';
import handler from './api/popular-movies'
import Search from '../src/components/Search';
import Movie from "./movie";
import MovieHome from "./movie";


const Page = ({content: { results }}) => {

    return (
        <div>
            Welcome to Movies Page!
            {/*<Popular />*/}
            <Popular movies={results} />
            <Search />
            <MovieHome />
            {/*<Movie />*/}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/popular-movies`);
    const { data: { results } } = await response.json();

    return {
        props: {
            content: {
                results
            }
        }
    }
}

export default Page;
