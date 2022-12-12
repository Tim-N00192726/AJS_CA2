import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/Register";

const Home = (props) => {
    return (
        <>

            {(!props.authenticated) ? (
                <>
                <LoginForm onAuthenticated={props.onAuthenticated} />
                <RegisterForm onAuthenticated={props.onAuthenticated}/>
                </>
            ) : (
                <p>You are logged in</p>
            )}
            
            
        </>
    );
};

export default Home;