import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
import styled from 'styled-components';
import './App.css';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Button = styled.button`
  text-align: center;
  width: 100px;
  height: 50px;
  border: 2px solid #443E3E;
  border-radius: 20px;
  padding: 1%;
  background: #B7C0BD;
  &:hover {
    background: #CEAE8B;
    cursor: pointer;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1%;
  align-items: center;

`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [whichAPI, setWhichAPI] = useState('people')

  useEffect(()=>{
    axios.get(`https://swapi.co/api/${whichAPI}/`)
    .then(response => {
      console.log(response);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }, [whichAPI]);
  
  return (
    <Container className="App">
      <ButtonDiv>
      <Button onClick={() => setWhichAPI('people')}><strong>Characters</strong></Button>
      <h1 className="Header">React Wars</h1>
      <Button onClick={() => setWhichAPI('films')}><strong>Films</strong></Button>
      </ButtonDiv>
      <CardContainer>
      {characters.map(el => {
        return <Card key={el} name={el.name} birth_year={el.birth_year} height={el.height} mass={el.mass} title={el.title} opening={el.opening_crawl}/>
      })}
      </CardContainer>
    </Container>
  );
}

export default App;
