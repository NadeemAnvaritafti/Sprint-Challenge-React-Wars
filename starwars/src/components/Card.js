import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 #58412E;
    background: #CEAE8B;
    &:hover {
        background: #B7C0BD;
    }
`;

const CardSubtitles = styled.div`
    border-top: 1px solid #AB9783;
    margin-left: 2%;
    margin-right: 2%;
`;


const Card = props => {
    return (
        <CardDiv>
            <h2>{props.name}{props.title}</h2>
            <CardSubtitles>
                <p>{props.opening}</p>
                <p>Born: {props.birth_year}</p>
                <p>Height: {props.height} cm</p>
                <p>Mass: {props.mass} kg</p>
            </CardSubtitles>
        </CardDiv>
    )
}

export default Card;