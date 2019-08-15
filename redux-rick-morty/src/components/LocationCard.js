import React from 'react';

import {LocationContainer, CharacterH3, CharacterH4, CharacterParagraph} from '../styles/appStyles';

const LocationCard = props => {
    const {location} = props;

    return (
        <LocationContainer>
            <CharacterH3>{location.name}</CharacterH3>
            <CharacterH4>{location.type} - {location.dimension}</CharacterH4>
            <CharacterParagraph>{location.residents.length} Residents</CharacterParagraph>
            {/* {console.log(location)}  */}
        </LocationContainer>
    )
}

export default LocationCard;