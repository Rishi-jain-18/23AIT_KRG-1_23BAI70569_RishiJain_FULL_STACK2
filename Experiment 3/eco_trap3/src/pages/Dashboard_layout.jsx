import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard_layout() {
  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="main card">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
