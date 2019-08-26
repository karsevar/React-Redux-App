
import React from 'react';
import {CharacterDiv, CharacterImg, CharacterH3, CharacterH4, CharacterParagraph} from '../styles/appStyles';

const CharacterCard = props => {
    const {character} = props
    return (
        <CharacterDiv>
            <CharacterImg src={character.image} alt={character.name} />
            <CharacterH3>{character.name}</CharacterH3>
            <CharacterH4>{character.species} - {character.status}</CharacterH4>
            <CharacterParagraph>Location: {character.location.name}</CharacterParagraph>
            <CharacterParagraph>Origin: {character.origin.name}</CharacterParagraph>
        </CharacterDiv>
    )
}

export default CharacterCard;