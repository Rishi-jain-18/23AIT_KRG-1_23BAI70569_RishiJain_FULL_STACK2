import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function LoginPage() {
  const { handleLogin } = useContext(AuthContext);

  return (
    <div className="container" style={{height: '100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h2>Hello</h2>
      <button onClick={() => handleLogin()}>Login Now</button>
    </div>
  );
}