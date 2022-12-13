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
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteBtn from './DeleteBtn';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const SingleMovie = (props) => {
  const [ image, setImage ] = useState(null);


   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdd0bcd791c3edc6adf7af0e79b0df63&language=en-US&query=${props.movie.title}&page=1`)
             .then((response) => {
              console.log(response.data.results[0])
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
              p: { xs: 5},
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
            <br></br>
            <Chip color='primary' icon={<ExpandCircleDownIcon />} label='Scroll down for More'/>
            </Box>
            <Box 
            sx={{
              m: { xs: 5},
              bottom: 0,
              left: 0,
            }}
            >
              <h2>Director</h2>
              <Chip color='info' icon={<AccountCircleIcon />} variant='outlined'label={props.movie.director}/>
            </Box>
            <Box 
            sx={{
              m: { xs: 5},
              bottom: 0,
              left: 0,
            }}
            >
              <h2>Actors</h2>
              <Chip color='info' icon={<AccountCircleIcon />} variant='outlined'label={props.movie.actor1}/>
              <Chip color='info' icon={<AccountCircleIcon />} variant='outlined'label={props.movie.actor2}/>
              <Chip color='info' icon={<AccountCircleIcon />} variant='outlined'label={props.movie.actor3}/>
              <Chip color='info' icon={<AccountCircleIcon />} variant='outlined'label={props.movie.actor4}/>

            </Box>
            <Button 
                component={Link} 
                to={`/movies/${props.movie._id}/edit`}
                startIcon={<EditIcon />}
                variant='outlined'
                sx={{
                  m: { xs: 5},
                  bottom: 0,
                  left: 0,
                }}
            >
                Edit
            </Button>
            <DeleteBtn id={props.movie._id} resource='movies' callback={props.callback} />

        </Grid>     
        </Grid>
    </Paper>
    </Grid>


    
      );
};

export default SingleMovie;

