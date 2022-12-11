import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import {  useState } from 'react';
import axios from 'axios';



const SingleMovie = (props) => {
  const [ image, setImage ] = useState(null);

   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdd0bcd791c3edc6adf7af0e79b0df63&language=en-US&query=${props.movie.title}&page=1&year=${props.movie.release_date}`)
             .then((response) => {
                 setImage(response.data.results[0].backdrop_path)
             })
             .catch((err) => {
                 console.error(err);
             });

    return (


    <Grid >
    <Paper  
    >
       {(image === null) ? (
                 <CardMedia 
                 component="img" 
                 style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100vw',
                  height: "95vh",
                  position: "relative",
                  overflow: "hidden",
                }}  
                image={`https://c2timbeary.s3.eu-west-1.amazonaws.com/no_image.png`}
                
                />
            ) : (
              <CardMedia 
              component="img" 
                 style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100vw',
                  height: "95vh",
                  position: "relative",
                  overflow: "hidden",
                }}  
                 image={`https://image.tmdb.org/t/p/w1280${image}`}
              />
            )
      } 
        <Grid container>
        <Grid>
            
            <Box
            sx={{
              position: 'absolute',
              p: { xs: 2},
              bottom: 0,
              left: 0,
            }}
          >
            <Chip color='warning' icon={<StarIcon />} label={props.movie.rating}/>
            <br/>
            <br/>
            <Typography variant="h4" color="white" >
              {props.movie.title}
            </Typography>
            <br/>
            <Typography variant="h6" color="white" >
              {props.movie.description}
            </Typography>
            </Box>
        </Grid>     
        </Grid>
    </Paper>
    </Grid>


    
      );
};

export default SingleMovie;

