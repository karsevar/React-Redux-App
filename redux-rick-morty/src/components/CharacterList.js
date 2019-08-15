import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import CharacterCard from './CharacterCard';

import {getCharacters} from '../actions';

const CharactersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

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

            {props.isFetching ? (
                <Loader 
                    type="ThreeDots" 
                    color='grey' 
                    height={400} 
                    width={400} 
                />
            ) : (
                <CharactersDiv>
                    {props.characters && 
                        props.characters.map((character, index) => (<CharacterCard key={index} character={character} />))}
                </CharactersDiv>
            )
            }
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