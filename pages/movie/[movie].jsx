import { useRouter } from 'next/router';

const Movie = ({ movie }) => {
    if (movie && Object.keys(movie).length === 0 &&
        Object.getPrototypeOf(movie) === Object.prototype) {
        const router = useRouter();
        const { movie: movieName } = router.query;

        return (
            <div>
                <p>
                    That movie couldn't be found!
                </p>
                <p>
                    Retry your search.
                </p>
                <p>
                    {`Maybe '${movieName}' would be a good title for a movie, though. (ideas!)`}
                </p>
            </div>
        )
    }

    return (
            <div>
                {
                    movie.original_title
                }
                {
                    movie.overview
                }
                Movie Page!
            </div>
    );
}

// export async function getStaticPaths() {
//     return {
//         paths: [{params: {movie: 'aliens'}}],
//         fallback: true
//     }
// }
//
// export async function getStaticProps({params}) {
//     const res = await fetch(`http://localhost:3000/api/movie/${params.movie}`);
//     console.log('*****res*****: ', res);
//     const { results: { 0: movie } } = await res.json();
//
//     return { props: { movie } };
// }

export async function getServerSideProps({query}) {
    const findMovie = query.movie;
    const moviesStream = await fetch(`http://localhost:3000/api/movie/${findMovie}`);
    // console.log('*****moviesStream*****: ', await moviesStream.json());
    // console.log('*****moviesStream*****: ', moviesStream);
    const { results: {0: movie = {} } = [] } = await moviesStream.json();

    // console.log('*****movie****: ', movie);

    return { props: { movie } }
}

export default Movie;
