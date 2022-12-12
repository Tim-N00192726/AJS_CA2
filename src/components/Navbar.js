import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HdIcon from '@mui/icons-material/Hd';







const Navbar = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false);
        navigate('/');
    };


    return (

        <>

    <Box 
     sx={{ flexGrow: 1 }}>

      <AppBar position="static" color="transparent" enableColorOnDark>
        <Toolbar >
        
            
            <HdIcon 
            fontSize='large'
            color='warning'
            />
            {(props.authenticated) ? (

            <>   

            <Button component={Link} to='/movies' color='inherit'>movies</Button>

            <Button component={Link} to='/movies/create' color='inherit'>Create Movie</Button>

            </>

            ) : ""}

            {/* {(props.authenticated) ? (


            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for a Movie"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            ) : ""} */}

          {(props.authenticated) ? (
                <Button 
                variant='outlined' 
                onClick={logout}  

                >
                    Logout
                
                </Button>
            ) : ""}
        </Toolbar>
        
      </AppBar>
    </Box>


      </>
    );
};

export default Navbar;