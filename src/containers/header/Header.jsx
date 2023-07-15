import React, { useEffect } from 'react';
import './header.css';

function App() {
  useEffect(() => {
    document.title = "Pluto Learning";
  }, []);

  // Rest of your component code
  return (
    <Header />
    // JSX elements
  );
}

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>This is pluto</h1>
      </div>
      <div className='header-subtitle'>
        <h2>connect. grow. explore</h2>
      </div>
    </div>
  );
}

export default App;
