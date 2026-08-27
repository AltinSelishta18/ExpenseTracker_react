import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function LoginForm() {
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    function handleLogin(){
        setLoggedIn(true);
        navigate(location.state.from)
    }
    return (
        <button onClick={handleLogin}>Log in</button>
    )

}

export default LoginForm;