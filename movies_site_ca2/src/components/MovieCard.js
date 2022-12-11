import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {  useState } from 'react';
import axios from 'axios';


// import DeleteBtn from './DeleteBtn';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {

  const [ image, setImage ] = useState(null);

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdd0bcd791c3edc6adf7af0e79b0df63&language=en-US&query=${props.movie.title}&page=1&year=${props.movie.release_date}`)
            .then((response) => {
                setImage(response.data.results[0].poster_path)
            })
            .catch((err) => {
                console.error(err);
            });

    let title = <p><b>Title:</b> {props.movie.title} </p>;

    if(props.authenticated){
        title =  <p><b>Title:</b> <Link to={`/movies/${props.movie._id}`}>{props.movie.title}</Link> </p>;
    }

    return (
    
    <Card style={{height: '100%', width: '100%'}}>

      <CardActionArea component={Link} to={`/movies/${props.movie._id}`}>
      {(!image === null || props.movie.image == undefined) ? (
                 <CardMedia 
                 component="img" 
                 style={{height: 'fit-content',maxHeight: '80vh', width: '100%' }} 
                 
                 image={`https://image.tmdb.org/t/p/w500${image}`}
                 />
            ) : (
              <CardMedia 
              component="img" 
              style={{height: 'fit-content',maxHeight: '80vh', width: '100%' }} 
              image={`https://c2timbeary.s3.eu-west-1.amazonaws.com/${props.movie.image}`}
              />
            )
      } 
        <CardContent>
        <Typography color="text.secondary">
                {props.movie.title} ({props.movie.release_date})
          </Typography>
          <hr/>
          <StarIcon color='warning' /> Rating: {props.movie.rating} 
        </CardContent>
      </CardActionArea>
    </Card>
    
      );
};

export default MovieCard;