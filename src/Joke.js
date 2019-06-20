import React, { useState, useEffect, useContext } from 'react';
import PigLatinContext from './PigLatinContext';

function Joke(props) {
  const [joke, setJoke] = useState('');
  const [pigLatinStatus, setPigLatinStatus] = useState(false);

  const context = useContext(PigLatinContext);  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      }).then(data => data.json()).then(myObject => myObject.joke);
    setJoke(responseJoke);
  }

  const printableJoke = pigLatinStatus ? context.translate(joke) : joke;

  return (
    <div>
      {context.name}
        <h2>Get a Random Joke</h2>
        <p>{printableJoke}</p>
        <button onClick={() => fetchData()}>
            Get a new joke
        </button>
        <p>
        <label>Enable Pig Latin!
            <input type="checkbox" onChange={() => setPigLatinStatus(!pigLatinStatus)} />
        </label>
        </p>
    </div>
  );
}

export default Joke;