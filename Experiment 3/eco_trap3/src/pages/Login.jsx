import React from 'react'
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate(); 
  const {isAuthenticated,setIsAuthenticated} = useAuth(); 
  function handleLogin(){
    setIsAuthenticated(!isAuthenticated);
    navigate('/');
  }
  if(isAuthenticated){
     return (
      <div className="center-card card">
          <h2>You're logged in</h2>
          <button className="btn" onClick={handleLogin}>Log out</button>
      </div>
    ); 
  }
  else{
    return (
    <div className="center-card card">
        <h2>Welcome back</h2>
        <p className="muted">Sign in to view your dashboard and logs</p>
        <button className="btn primary" onClick={handleLogin}>Log in</button>
    </div>
  )}
}
