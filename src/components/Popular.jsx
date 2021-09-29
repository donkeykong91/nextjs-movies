import React from 'react';
import Link from 'next/link'
import {Card, Grid, Text} from "theme-ui";

// dynamically make a function call to store the image of the movie into a bucket (s3, ibm cloud obj storage, etc)
// later, cache the image (or use nextjs for caching) in redis
// const posterUrl = 'https://image.tmdb.org/t/p/original';

const   Popular = ({movies}) => {
    return (
        <div>
            <Text>
                <Grid columns={['1fr 1fr 1fr 1fr']}>
                {
                    movies.map( movie => (
                        <div
                            key={movie.original_title}
                        >
                                <Card variant="primary">
                                        <Link href="/movie/[movie].jsx" as={`/movie/${movie.original_title}`}>
                                            <a>
                                                {movie.original_title}
                                            </a>
                                        </Link>
                                </Card>
                        </div>
                    ))
                }
                </Grid>
            </Text>
        </div>
    );
}

export default Popular;
