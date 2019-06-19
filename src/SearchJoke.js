import React, {useState, useEffect} from 'react';

function SearchJoke(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [allJokes, setAllJokes] = useState([]);
    const [pigLatinStatus, setPigLatinStatus] = useState(false);

    const noJokesFoundObject = { id: null, joke: "Sorry!  No jokes found.  Try again."}

    useEffect(() => {
        translateJokes();
    },[pigLatinStatus]);

    const translateJokes = () => { 
        return allJokes.map(joke => {
            return {
                id: joke.id,
                joke: props.translate(joke.joke),
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
            <h2>Search for a Joke</h2>
            <form onSubmit={submitForm}>
            <input 
                type="text" 
                name="Term"
                placeholder="Enter a search term" 
                value={searchTerm}
                onChange={handleSearchTerm}
                /> 
            <button type="submit">
                Search!
            </button>
            <p>
        <label>Enable Pig Latin!
            <input type="checkbox" onChange={() => setPigLatinStatus(!pigLatinStatus)} />
        </label>
        </p>
            </form>
            <ul>
                {printableJokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
            </ul>
        </div>
    )
}

export default SearchJoke;