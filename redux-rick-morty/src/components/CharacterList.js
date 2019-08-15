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
                {props.isFetching ? 'Loading Data' : 'Fetch Rick and Mortys!'}
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(
    mapStateToProps,
    {getCharacters}
)(CharacterList);