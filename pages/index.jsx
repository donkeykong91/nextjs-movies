import React from 'react';
import axios from 'axios';
import Popular from '../src/components/Popular';
import handler from './api/popular-movies'
import Search from '../src/components/Search';


// const Page = () => {
const Page = ({content: { results }}) => {

    // console.log('*****results[0]*****', results[0]);
    // console.log('*****results[0]*****', details.results[0]);
    // console.log('*****results*****', details);
    // return (
    //     <div>
    //         Welcome to Movies Page!
    //         <Popular />
    //     </div>
    // );
    return (
        <div>
            {/*Movies List:*/}
            {/*{*/}
            {/*    // results.forEach( movie => movie.original_title)*/}
            {/*    results[0].original_title*/}
            {/*    // results[1].original_title*/}
            {/*    // results[2].original_title*/}
            {/*}*/}
            Welcome to Movies Page!
            {/*<Popular />*/}
            <Popular movies={results} />
            <Search />
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/popular-movies`);
    console.log('*****response*****: ', response);
    const { data: { results } } = await response.json();
    // const { data: { details } } = await response.json();
    // const { data: { response: results } } = await response.json();
    // const movies = await fetch(`http://localhost:3000/api/popular-movies`);
    // console.log('*****response*****: ', response);
    console.log('*****results*****: ', results);
    // console.log('*****details*****: ', details);

    return {
        props: {
            content: {
                results
            }
        }
    }
}

export default Page;
