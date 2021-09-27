import { useState } from 'react';

const Search = () => {
    const [movie, setMovie] = useState("");

    return (
        <div>
            Search Page!
            <form>
                Movie
                <input
                    id="movie"
                    onChange={(e) => {setMovie(e.target.value)}}
                    value={movie}
                    placeholder='Begin Your Movie Search!'
                />
                <button>Find It!</button>
            </form>
        </div>
    );
}


export default Search;
