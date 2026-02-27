import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from './productAPI';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    API().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Welcome to Experiment 5</h1>
      </header>
      <main className="content">
        <div className="card">
          <h2>User Information</h2>
          <p><strong>Name:</strong> {"Rishi" || 'Loading...'}</p>
          <p><strong>Age:</strong> {data.age || 'Loading...'}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
