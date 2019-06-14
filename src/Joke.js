import React, { useState, useEffect } from 'react';

function Joke() {
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

  const basicPigLatinatron = (string) => {
      // TODO refactor for punctuation, quotes at the end of words
      // TODO look up the rules of pig latin and see if there's more to it.
    return string.split(' ')
                 .map(word => word.slice(1) + word[0] + 'ay')
                 .join(' ');
  }

  const printableJoke = pigLatinStatus ? basicPigLatinatron(joke) : joke;

  return (
    <div>
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