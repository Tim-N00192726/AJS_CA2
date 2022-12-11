import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Navbar = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false);
        navigate('/');
    };


    return (
        <Grid item xs={12}>
            <Button component={Link} to='/'>Home</Button>
            <Button component={Link} to='/movies'>movies</Button>
            {(props.authenticated) ? (
                <Button variant='outlined' onClick={logout}>Logout</Button>
            ) : ""}

        </Grid>
    );
};

export default Navbar;