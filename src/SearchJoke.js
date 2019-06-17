import React, {useState, useEffect} from 'react';

function SearchJoke(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [allJokes, setAllJokes] = useState([]);
    const [pigLatinStatus, setPigLatinStatus] = useState(false);

    useEffect(() => {
        translateJokes();
    },[pigLatinStatus]);

    const translateJokes = () => { 
        const translatedJokes = allJokes.map(joke => {
            return {
                id: joke.id,
                joke: props.translate(joke.joke),
            }
        });
        
        setAllJokes(translatedJokes);
    }

    const fetchData = async (term) => {
        const encodedTerm = encodeURIComponent(searchTerm);
        const responseJokes = await fetch(`https://icanhazdadjoke.com/search?term=${encodedTerm}`, {
          headers: { Accept: "application/json"} 
        }).then(data => data.json()).then(response => response.results);
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
                {allJokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
            </ul>
        </div>
    )
}

export default SearchJoke;