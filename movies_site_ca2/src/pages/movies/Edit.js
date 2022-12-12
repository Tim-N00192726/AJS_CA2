import { useState, useEffect } from 'react';
import axios from '../../config';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/Textfield';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Edit = () => {
    const [ movie, setMovie] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/movies/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setMovie(response.data);
                 setForm(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!!`
                    }
                }));
            }
        });

        return error;
    };

    const submitForm = () => {

        if(!isRequired(['title', 'description', 'release_date', 'director', 'rating', 'actor1'])){

            axios.put(`/movies/${id}`, form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/movies');
             })
             .catch(err => {
                console.error(err);
                console.log(err.response.data.message)
                setErrors(err.response.data.errors);
             });
        }

    };



    

    if(!movie) return "Loading...";



    return (
       
        <Container 
        style={{
            marginTop: '5vh',
        }}

    >
       
    <Paper 
        square
        variant="outlined" 
        xs={12}
        style={{
            paddingTop: '5vh',
            paddingBottom: '5vh',
        }}
    >
      <Grid 
        container
        justifyContent="center"
        alignItems="center" 
        >
        <Grid item xs={8} md={4}>

        <Grid>
          <TextField
            style={{
                marginBottom: '1vh'
            }}
            fullWidth
            variant='outlined' 
            label='Title' 
            name='title' 
            value={form.title}
            onChange={handleForm}
            error={errors.title}
            helperText={errors.title?.message}a
          />
        </Grid>
        <Grid >
            <TextField
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth
                variant='outlined' 
                label='Description' 
                name='description' 
                value={form.description}
                onChange={handleForm}
                error={errors.description}
                helperText={errors.description?.message}a
            />
        </Grid>
        <Grid >
            <TextField
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth
                variant='outlined' 
                label='Director' 
                name='director' 
                value={form.director}
                onChange={handleForm}
                error={errors.director}
                helperText={errors.director?.message}a
            />
        </Grid>
        <Grid >
            <TextField 
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth 
                variant='outlined' 
                label='Release Date' 
                name='release_date' 
                value={form.release_date}
                onChange={handleForm}
                error={errors.release_date}
                helperText={errors.release_date?.message}
            />
        </Grid>
        <Grid  >
            <FormControl style={{marginBottom: '1vh'}} variant='outlined' fullWidth error={errors.genre}>
                <InputLabel id='genre-select'>Genre</InputLabel>
                    <Select labelId='genre-select' name='genre' label='Genre' onChange={handleForm} value={form.genre}>
                        <MenuItem value='Action'>Action</MenuItem>
                        <MenuItem value='Comedy'>Comedy</MenuItem>
                        <MenuItem value='Thriller'>Thriller</MenuItem>
                        <MenuItem value='Horror'>Horror</MenuItem>
                        <MenuItem value='Drama'>Drama</MenuItem>
                    </Select>
                <FormHelperText>{errors.genre?.message}</FormHelperText>
            </FormControl>
        </Grid>
        <Grid >
            <TextField 
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth 
                variant='outlined' 
                label='Rating' 
                name='rating' 
                value={form.rating}
                onChange={handleForm}
                error={errors.rating}
                helperText={errors.rating?.message}
            />
        </Grid>
        <Grid  >
            <TextField 
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth
                variant='outlined'
                label='Actor'
                name='actor1'
                value={form.actor1}
                onChange={handleForm}
                error={errors.actor1}
                helperText={errors.actor1?.message}
            />
        </Grid>
        <Grid >
            <TextField 
            style={{
                marginBottom: '1vh'
            }}
                fullWidth
                variant='outlined'
                label='Actor'
                name='actor2'
                value={form.actor2}

                onChange={handleForm}
                error={errors.actor2}
                helperText={errors.actor2?.message}
            />
        </Grid>
        <Grid  >
            <TextField 
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth
                variant='outlined'
                label='Actor'
                name='actor3'
                value={form.actor3}
                onChange={handleForm}
                error={errors.actor3}
                helperText={errors.actor3?.message}
            />
        </Grid>
        <Grid  >
            <TextField 
                style={{
                    marginBottom: '1vh'
                }}
                fullWidth
                variant='outlined'
                label='Actor'
                name='actor4'
                value={form.actor4}
                onChange={handleForm}
                error={errors.actor4}
                helperText={errors.actor4?.message}
            />
        </Grid>
        <Grid  xs={8}>
            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </Grid>
        </Grid>
      </Grid>
      </Paper>
      </Container>

    );
};

export default Edit;