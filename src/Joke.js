import React, { useState, useEffect } from 'react';

function Joke(props) {
  const [joke, setJoke] = useState('');
  const [pigLatinStatus, setPigLatinStatus] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      }).then(data => data.json()).then(myObject => myObject.joke);
    setJoke(responseJoke);
  }

  const printableJoke = pigLatinStatus ? props.translate(joke) : joke;

  return (
    <div>
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