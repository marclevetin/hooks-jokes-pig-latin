import React, { useState, useEffect, useContext } from 'react';
import PigLatinContext from './PigLatinContext';

import {Header2, Paragraph, Button, Label, Checkbox} from './styledComponents';

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
        <Header2>Get a Random Joke</Header2>
        <Paragraph>{printableJoke}</Paragraph>
        <Button onClick={() => fetchData()}>
            Get a new joke
        </Button>
        <Paragraph>
        <Label>Enable Pig Latin!
            <input type="checkbox" onChange={() => setPigLatinStatus(!pigLatinStatus)} />
        </Label>
        </Paragraph>
    </div>
  );
}

export default Joke;