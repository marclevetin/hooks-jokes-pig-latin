import React from "react";
import Joke from './Joke';
import SearchJoke from './SearchJoke'; 

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Arizonia|Open+Sans');
    margin: 0;
  }
`
import {Wrapper, Center, Header1, Subtitle} from './styledComponents';

export default () => (
    <>
    <GlobalStyles />
    <Wrapper>
        <Center>
            <Header1>React to Dad Jokes</Header1>
            <Subtitle>Hooks, lines, and stinkers</Subtitle>
            <Joke />  
            <hr />
            <SearchJoke />
        </Center>
    </Wrapper>
    </>
);