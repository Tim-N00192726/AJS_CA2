import { useState } from 'react';
import axios from '../config';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';




const LoginForm = (props) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {

        axios.post('/users/login', {
                email: form.email,
                password: form.password
            })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                props.onAuthenticated(true, response.data.token);
             })
             .catch((err) => {
                console.error(err);
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
             });
    };

    // if(authenticated) return "You are logged in";

    return (
        <>


            <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Divider>
            <Chip label="Sign In" />
        </Divider>
          <Box component="form" sx={{ mt: 5 , width: '50vw'}}>
            <Input
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              placeholder='email'
              value={form.email}
              onChange={handleForm}
            />
            <br></br>
            <br></br>
            <Input
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder='password'
              value={form.password}
              onChange={handleForm}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitForm}
              
            >
              Sign In
            </Button>
            <p >{errorMessage}</p>
            
          </Box>
        </Box>

        <br></br>

       
        </>
    );
};

export default LoginForm;