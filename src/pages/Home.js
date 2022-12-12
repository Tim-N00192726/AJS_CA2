import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/Register";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




const Home = (props) => {
    return (
        <>

            {(!props.authenticated) ? (
                <>
                <LoginForm onAuthenticated={props.onAuthenticated} />
                <RegisterForm onAuthenticated={props.onAuthenticated}/>
                </>
            ) : (

                <>
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
               image={`https://c2timbeary.s3.eu-west-1.amazonaws.com/home_page.jpg`}
               />

               <Box  sx={{
              position: 'absolute',
              p: { xs: 10},
              bottom: 0,
              left: 0,
              right: 0
            }}>

<Typography variant="h1" color='white'>
              Welcome to my Movie App
            </Typography>

            </Box>

               </>
               
            )}
            
            
        </>
    );
};

export default Home;