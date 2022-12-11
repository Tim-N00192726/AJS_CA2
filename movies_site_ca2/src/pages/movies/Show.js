import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config';
import { useEffect, useState } from 'react';
import SingleMovie from '../../components/SingleMovie';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const Show = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ movie, setMovie] = useState(null);

    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/movies');
    };

    

    useEffect(() => {
        axios.get(`/movies/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setMovie(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    if(!movie) return "Loading...";


    return (

        <Grid >  
             <SingleMovie movie={movie} callback={deleteCallback}/>
        </Grid>

    );
};

export default Show;