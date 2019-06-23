import styled from 'styled-components';

const colorPalette = {
    dark: '#230F2B',
    red: '#F21D41',
    yellow: '#EBEBBC',
    lightGreen: '#BCE3C5',
    darkGreen: '#82B3AE'
};

const fonts = {
    headers: "'Arizonia', cursive;",
    body: "'Open Sans', sans-serif;"
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${colorPalette.darkGreen};
`;

export const Center = styled.section`
    flex-basis: 70%;
    background: ${colorPalette.lightGreen};
    padding: 1em;
`;

export const Form = styled.form`
    display: flex;
`;

export const Button = styled.button`
  background: ${colorPalette.lightGreen};
  border-radius: 3px;
  border: 2px solid ${colorPalette.darkGreen};
  color: ${colorPalette.dark};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: background 1s ease;

  &:hover {
      background: ${colorPalette.darkGreen};
  }
`;

export const Input = styled.input`
    font-size: 1em;
    flex-basis: 50%;
    @media only screen and (max-width: 600px) {
        flex-basis: 100%;
    }
`;

export const Header1 = styled.h1`
    font-family: ${fonts.headers};
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0;
`;

export const Subtitle = styled.h1`
    font-family: ${fonts.headers};
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0;
`;

export const Header2 = styled.h2`
    font-family: ${fonts.headers};
`;

export const Paragraph = styled.p`
    fontFamily: ${fonts.headers};
    color: ${colorPalette.dark};
`;

export const Label = styled.label`
    fontFamily: ${fonts.body};
    color: ${colorPalette.dark};
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));  
    grid-auto-rows: auto;
    grid-gap: 10px;
`;

export const ListItem = styled.li`
    list-style-type: none;
    border: 1px solid ${colorPalette.darkGreen};
    margin: .25em 0 ;
    padding: 1em;
    transition: background 1s ease;

    &:hover {
        background: ${colorPalette.darkGreen};
    }
`;
