import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Dashboard() {
  const [message, setMessage] = useState(""); 
  
  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(data=> setMessage(data.slip.advice)).catch(error=> console.log(error)); 
  },[]); 


  return (
    <>
    <Navbar title="Dashboard" />
    {message !== "" && <p className="tip">Today's Healthy Tip: {message}</p>}
    <Outlet />
    </>
  )
}
