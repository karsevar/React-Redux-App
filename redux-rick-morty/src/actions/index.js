import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({type: FETCH_CHARACTERS_START});
    axios
        .get('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => {
            // console.log(res);
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: FETCH_CHARACTERS_FAILURE, payload:`${err.response.data.error} ${err.response.status}`}) 
        })
    
}

export const FETCH_LOCATIONS_START = 'FETCH_LOCATIONS_START';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export const getLocations = () => dispatch => {
    dispatch({type: FETCH_LOCATIONS_START});
    axios
        .get('https://rickandmortyapi.com/api/location') 
        .then(res => {
            // console.log(res.data.results);
            dispatch({type: FETCH_LOCATIONS_SUCCESS, payload: res.data.results}) 
        })
        .catch(err => {
            // console.log(err);
            dispatch({type: FETCH_LOCATIONS_FAILURE, payload:`${err.response.data.error} ${err.response.status}`}) 
        })
}