import axios from '../../config';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';

const Index = (props) => {
    const [ movies, setMovies ] = useState(null);

    useEffect(() => {
        axios.get('/movies')
             .then((response) => {
                 console.log(response.data);
                 setMovies(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!movies) return 'Loading...';

    const deleteCallback = (id) => {
        let moviesNew = movies.filter(movie => {
            return movie._id !== id;
        });

        setMovies(moviesNew);
    };

    const moviesList = movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} authenticated={props.authenticated} callback={deleteCallback}/>;
    });

    return (
        <>
            <h2>Movies</h2>
            { moviesList }
        </>
    );
};

export default Index;