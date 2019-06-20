import React, {useState, useEffect, useContext} from 'react';
import PigLatinContext from './PigLatinContext';

import {Header2, Button, Paragraph, Label, Form, Input, List, ListItem} from './styledComponents';

function SearchJoke(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [allJokes, setAllJokes] = useState([]);
    const [pigLatinStatus, setPigLatinStatus] = useState(false);

    const context = useContext(PigLatinContext);  

    const noJokesFoundObject = { id: null, joke: "Sorry!  No jokes found.  Try again."}

    useEffect(() => {
        translateJokes();
    },[pigLatinStatus]);

    const translateJokes = () => { 
        return allJokes.map(joke => {
            return {
                id: joke.id,
                joke: context.translate(joke.joke),
            }
        });
    }

    const fetchData = async (term) => {
        const encodedTerm = encodeURIComponent(searchTerm);
        const responseJokes = await fetch(`https://icanhazdadjoke.com/search?term=${encodedTerm}`, {
          headers: { Accept: "application/json"} 
        })
        .then(data => data.json())
        .then(response => {
            if (response.results.length) {
                return response.results;
            } else {
                return [noJokesFoundObject];
            }
        });
        setAllJokes(responseJokes);
    }

    const handleSearchTerm = (event) => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
    }

    const submitForm = () => {
        event.preventDefault();
        fetchData(searchTerm);
    }

    const printableJokes = (pigLatinStatus) ? translateJokes() : allJokes;

    return (
        <div>
            <Header2>Search for a Joke</Header2>
            <Form onSubmit={submitForm}>
                <Input 
                    type="text" 
                    name="Term"
                    placeholder="Enter a search term" 
                    value={searchTerm}
                    onChange={handleSearchTerm}
                /> 
                <Button type="submit">
                    Search!
                </Button>
            </Form>
            {/* <Paragraph> */}
        <Label>Enable Pig Latin!
            <input type="checkbox" onChange={() => setPigLatinStatus(!pigLatinStatus)} />
        </Label>
        {/* </Paragraph> */}
            <List>
                {printableJokes.map(joke => <ListItem key={joke.id}>{joke.joke}</ListItem>)}
            </List>
        </div>
    )
}

export default SearchJoke;