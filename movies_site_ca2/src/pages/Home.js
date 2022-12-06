import LoginForm from "../components/LoginForm";

const Home = (props) => {
    return (
        <>
            <h1>Home</h1>

            {(!props.authenticated) ? (
                <LoginForm onAuthenticated={props.onAuthenticated} />
            ) : (
                <p>You are logged in</p>
            )}
            
            
        </>
    );
};

export default Home;