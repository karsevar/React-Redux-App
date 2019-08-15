
import React from 'react';
import styled from 'styled-components';

const CharactersDiv = styled.div`
  font-family: "sans-serif";
  margin: 0px 5px 40px 5px;
  box-shadow: 1px 1px 9px 2px #888888;
  padding: 10px;
  border-radius: 10px;
  width: 320px;
  

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CharacterImg = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const CharacterH3 = styled.h3`
  font-size: 2.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CharacterH4 = styled.h3`
  font-size: 1.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CharacterParagraph = styled.p`
  font-size: 1rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CharacterCard = props => {
    const {character} = props
    return (
        <CharactersDiv>
            <CharacterImg src={character.image} alt={character.name} />
            <CharacterH3>{character.name}</CharacterH3>
            <CharacterH4>{character.species} - {character.status}</CharacterH4>
            <CharacterParagraph>Location: {character.location.name}</CharacterParagraph>
            <CharacterParagraph>Origin: {character.origin.name}</CharacterParagraph>
        </CharactersDiv>
    )
}

export default CharacterCard;