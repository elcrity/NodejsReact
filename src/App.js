import logo from './logo.svg';
import './App.css';
import { string } from 'prop-types';
import { useEffect, useState } from 'react';

function App() {
  const [string,setString] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api")
    .then(res => res.json())
    .then(data => {
      setString(data.message);
      console.log(data.message)
    })
  },[])
  
  return (
    <div className="App">
      {string}
    </div>
  );
}

export default App;
