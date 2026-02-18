import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/");
    }
        return (
                <div className="card" style={{maxWidth:420,margin:'2rem auto'}}>
                    <h3 className="page-title">Login</h3>
                    <p className="muted">Sign in to access your dashboard</p>
                    <div style={{marginTop:16}}>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
        )
}
export default Login;