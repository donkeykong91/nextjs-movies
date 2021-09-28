import React from 'react';
import Link from 'next/link'

// dynamically make a function call to store the image of the movie into a bucket (s3, ibm cloud obj storage, etc)
// later, cache the image (or use nextjs for caching) in redis
// const posterUrl = 'https://image.tmdb.org/t/p/original';

const Popular = ({movies}) => {
    return (
        <div>
            Popular Page!
            {
                movies.map( movie => (
                    <div
                        key={movie.original_title}
                    >
                        <Link href="/movie/[movie].jsx" as={`/movie/${movie.original_title}`}>
                            <a>{movie.original_title}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Popular;
