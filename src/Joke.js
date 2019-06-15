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
    return string.split(' ')
                .map(word => {
                    const vowels = ['a','e','i','o','u'];
                    const firstLetter = word[0].toLowerCase();
                    const secondLetter = (word.length > 1) ? word[1].toLowerCase() : null;

                    const isCapitalized = (firstLetter !== word[0]);
                    const beginsWithVowel = vowels.includes(firstLetter);
                    const secondLetterConsonant = !vowels.includes(secondLetter);

                    let returnWord = '';

                    if (beginsWithVowel) {
                        returnWord = `${word}way`;
                    } else if (!beginsWithVowel && secondLetterConsonant) {
                        returnWord = `${word.slice(2)}${firstLetter}${secondLetter}ay`;
                    } else {
                        returnWord = `${word.slice(1)}${firstLetter}ay`;
                    }

                    return (isCapitalized) ? `${returnWord[0].toUpperCase()}${returnWord.slice(1)}` : `${returnWord}`;
                })
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