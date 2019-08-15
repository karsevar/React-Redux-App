import React from 'react';

const CharacterCard = props => {
    return (
        <div>
            <h3>{props.character.name}</h3>
        </div>
    )
}

export default CharacterCard;