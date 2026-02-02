import React from 'react'

export default function DashboardSummary() {
  return (
    <div className="summary-grid">
      <div className="stat card">
        <h3>Carbon Score</h3>
        <p className="stat-value">72</p>
        <p className="muted">Lower is better</p>
      </div>

      <div className="stat card">
        <h3>Weekly Saved</h3>
        <p className="stat-value">12 kg</p>
        <p className="muted">Compared to last week</p>
      </div>

      <div className="stat card">
        <h3>Active Logs</h3>
        <p className="stat-value">3</p>
        <p className="muted">Recent activities</p>
      </div>
    </div>
  )
}
