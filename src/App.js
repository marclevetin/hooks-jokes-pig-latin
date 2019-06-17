import React from "react";
import Joke from './Joke';
import SearchJoke from './SearchJoke';

const usePigLatin = (string) => {
    try {
        return string.split(' ')
                    .map(word => {
                        if (word.length === 0) return word; // covers jokes that have two sentences and a double space after the first sentence ends

                        let workingWord = word;
                        const vowels = ['a','e','i','o','u'];
                        const punctuation = `"'.,?:`;

                        let startingPunctuation = null;
                        let endingPunctuation = null;

                        if (punctuation.includes(word[0])) {
                            startingPunctuation = word[0];
                            workingWord = word.slice(1);
                        }

                        if (punctuation.includes(word[word.length-1])) {
                            endingPunctuation = word[word.length-1];
                            workingWord = workingWord.substring(0, workingWord.length - 1);
                        }

                        const firstLetter = workingWord[0].toLowerCase();
                        const secondLetter = (workingWord.length > 1) ? workingWord[1].toLowerCase() : null;

                        const isCapitalized = (firstLetter !== workingWord[0]);
                        const beginsWithVowel = vowels.includes(firstLetter);
                        const secondLetterConsonant = !vowels.includes(secondLetter);

                        let returnWord = '';

                        if (beginsWithVowel) {
                            returnWord = `${workingWord}way`;
                        } else if (!beginsWithVowel && secondLetterConsonant) {
                            returnWord = `${workingWord.slice(2)}${firstLetter}${secondLetter}ay`;
                        } else {
                            returnWord = `${workingWord.slice(1)}${firstLetter}ay`;
                        }
                        
                        if (isCapitalized) {
                            returnWord = `${returnWord[0].toUpperCase()}${returnWord.slice(1)}`
                        }

                        if (startingPunctuation) {
                            returnWord = `${startingPunctuation}${returnWord}`;
                        }

                        if (endingPunctuation) {
                            returnWord = `${returnWord}${endingPunctuation}`;
                        }

                        return returnWord;
                    })
                    .join(' ');
    }
    catch(error) {
        console.error('Problem with this joke:', arguments[0]);
        console.error(error.message);
    }
}

export default () => (
  <>
  <h1>Jokes with React Hooks</h1>
    <Joke translate={usePigLatin} />  
    <hr />
    <SearchJoke translate={usePigLatin} />
  </>
);
