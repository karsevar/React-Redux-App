import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import CharacterCard from './CharacterCard';

import {getCharacters} from '../actions';

import {CharactersDiv, ErrorParagraph, FetchButton} from '../styles/appStyles';

const CharacterList = props => {

    // const fetchCharacters = e => {
    //     e.preventDefault();
    //     props.getCharacters();
    // }

    useEffect(() => {
        props.getCharacters();
    }, [])

    return (
        <div className='characters-container'>

            {/* {props.characters.length === 0 ? (
                <FetchButton
                    onClick={fetchCharacters}>
                    {props.isFetching ? 'Loading Data' : 'Fetch Rick and Mortys!'}
                </FetchButton>
                ) : (
                    null
                )
            } */}

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
            {props.error && <ErrorParagraph>{props.error}</ErrorParagraph>}
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