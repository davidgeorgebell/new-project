import React, { useEffect } from 'react';
import { fetchData } from './api';

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return <div className='App'>hello world</div>;
}

export default App;
