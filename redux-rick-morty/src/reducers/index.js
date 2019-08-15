import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from '../actions';

const initialState = {
    characters: [],
    locations: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            // console.log(action.type);
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_CHARACTERS_SUCCESS:
            // console.log(action.type, action.payload);
            return {
                ...state,
                isFetching: false,
                error: '',
                characters: action.payload
            }

        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}

export default reducer;
