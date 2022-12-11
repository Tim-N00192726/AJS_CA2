import axios from '../../config';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
        return <Grid item xs={12} md={3} > <MovieCard key={movie._id} movie={movie} authenticated={props.authenticated} callback={deleteCallback}/></Grid>;
    });

    return (
        <Container fixed>
        <Grid container spacing={3} >  
            { moviesList }
        </Grid>
        </Container>
    );
};

export default Index;