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

const CardContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }, []);

  
  return (
    <Container className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
      {characters.map(el => {
        return <Card key={el} name={el.name} birth_year={el.birth_year} height={el.height} mass={el.mass}/>
      })}
      </CardContainer>
    </Container>
  );
}

export default App;
