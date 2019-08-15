import React from 'react';
import {connect} from 'react-redux';

import {getCharacters} from '../actions';

const CharacterList = props => {

    const fetchCharacters = e => {
        e.preventDefault();
        props.getCharacters();
    }

    return (
        <div className='characters-container'>
            <button 
                className='character-button'
                onClick={fetchCharacters}>
            Fetch Rick and Mortys!
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error
})

export default connect(
    mapStateToProps,
    {getCharacters}
)(CharacterList);