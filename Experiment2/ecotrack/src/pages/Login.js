import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
