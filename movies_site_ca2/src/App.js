import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


//import pages
import Home from './pages/Home';
import Moviesindex from './pages/movies/Index';
import MoviesShow from './pages/movies/Show';
// import FestivalsCreate from './pages/festivals/Create';
// import FestivalsEdit from './pages/festivals/Edit';

import PageNotFound from './pages/PageNotFound';

//import components
import Navbar from './components/Navbar';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    let protectedMovies;

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setAuthenticated(true);
        }
    }, []);

    const onAuthenticated = (auth, token) => {
        setAuthenticated(auth);
        
        if(auth){
            localStorage.setItem('token', token);
        }
        else {
            localStorage.removeItem('token');
        }
    };


    if(authenticated){
        protectedMovies = (
            <>
                {/* <Route path="/movies/:id/edit" element={<FestivalsEdit />} /> */}
                <Route path="/movies/:id" element={<MoviesShow />} />
                {/* <Route path="/movies/create" element={<FestivalsCreate />} /> */}
            </>
        );
    }

    return (
        <Router>
                    <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated}/>
                    <Routes>
                        <Route path="/" element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                        <Route path="/movies" element={<Moviesindex authenticated={authenticated} />} />
                        {protectedMovies}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
        </Router>
    );
};

export default App;