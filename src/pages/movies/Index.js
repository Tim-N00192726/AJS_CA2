import axios from '../../config';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';


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


    if(!movies) return <Grid 
    style={{
        paddingTop: '50vh'
    }}
    container
    alignItems="center"
    justifyContent="center"
    >
    <CircularProgress/>
    </Grid>



    

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
    <>
        <br></br>
        <br></br>
        <Container fixed>
        <Grid container spacing={3} >  
            { moviesList }
        </Grid>
        </Container>

    </>
    );
};

export default Index;