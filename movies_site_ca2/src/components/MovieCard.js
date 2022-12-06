import { Link } from 'react-router-dom';


// import DeleteBtn from './DeleteBtn';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
    // const navigate = useNavigate();

    let title = <p><b>Title:</b> {props.movie.title} </p>;

    if(props.authenticated){
        title =  <p><b>Title:</b> <Link to={`/movies/${props.movie._id}`}>{props.movie.title}</Link> </p>;
    }

    return (
        <div>
            {title}
            <p><b>Description:</b> {props.movie.description}</p>
        </div>
    );
};

export default MovieCard;