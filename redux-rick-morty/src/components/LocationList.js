import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import LocationCard from './LocationCard';
import {getLocations} from '../actions';

import {CharactersDiv, ErrorParagraph, FetchButton} from '../styles/appStyles';

const LocationList = props => {

    // const fetchLocations = e => {
    //     e.preventDefault();
    //     props.getLocations();
    // }

    useEffect(() => {
        props.getLocations();
    }, [])

    return (
        <div className='locations-container'>

            {/* {props.locations.length === 0 ? (
                <FetchButton
                    onClick={fetchLocations}>
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
                    {props.locations.map((location, index) => <LocationCard key={index} location={location} />)}
                    
                </CharactersDiv>
            )
            }
            {props.error && <ErrorParagraph>{props.error}</ErrorParagraph>}
        </div>
    )
}

const mapStateToProps = state => ({
    locations: state.locations,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(
    mapStateToProps,
    {getLocations}
)(LocationList);