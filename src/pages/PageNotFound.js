import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PageNotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return (
        <>
            <h2>You must be logged in to view {location.pathname}</h2>
            <p>Redirecting you to Home</p>
        </>
    );
};

export default PageNotFound;