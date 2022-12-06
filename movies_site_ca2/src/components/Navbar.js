import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        props.onAuthenticated(false);
        navigate('/');
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <Link to='/'>Home</Link> | 
            <Link to='/movies'>Movies</Link>
            {(props.authenticated) ? (
                <button onClick={() => props.onAuthenticated(false)}>Logout</button>
            ) : ""}
        </div>
    );
};

export default Navbar;