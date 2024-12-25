import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState('false');

  useEffect( () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=efddd56dd0dc476488b86d19bc512a71&units=metirc`)
        .then(result => result.json())
        .then(jsonresult => {
          setTemp(jsonresult.main.temp);
          setDesc(jsonresult.weather[0].main);
          setIcon(jsonresult.weather[0].icon);
          setReady(true);
        })
        .catch(err => console.log(err))
  }, [])

  if (isReady) {
    return (
      <div className="App">
        <p>Temperature : {temp} °C</p>
        <p>Description: {desc}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}       
          alt="Weather icon" />
      </div> 
    );
  } else {
    return <div>Loading ... </div>
  } 
}

export default App;
