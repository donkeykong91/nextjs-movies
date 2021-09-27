import React from 'react';

// dynamically make a function call to store the image of the movie into a bucket (s3, ibm cloud obj storage, etc)
// later, cache the image (or use nextjs for caching) in redis
// const posterUrl = 'https://image.tmdb.org/t/p/original';

const Popular = ({movies}) => {
// const Popular = async ({movies}) => {
//     const moviePoster = async () => (await fetchMoviePoster(movies[0].poster_path))();

    // console.log('*****moviePoster*****: ', moviePoster);

    // console.log('*****movies*****: ', movies);

    // return (
    //     <div>
    //         Popular Page!
    //     </div>
    // );
    return (
        <div>
            Popular Page!
            {
                // movies[0].original_title
                movies.map( movie => (
                    <div
                        key={movie.original_title}
                    >
                        {/*<img src={`${posterUrl}/${movie.poster_path}`} />*/}
                        {movie.original_title}
                    </div>
                ))
            }
        </div>
    );
}

// const fetchMoviePoster = async (posterPath) => {
//     const moviePoster = await fetch(`${posterUrl}/${posterPath}`);
//
//     return moviePoster.json();
// }


export default Popular;
