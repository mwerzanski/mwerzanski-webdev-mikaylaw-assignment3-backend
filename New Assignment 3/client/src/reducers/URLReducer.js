

const initialState = {
    id: '',
    givenURL: '',
    shortendURL: '',
}

const URLReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_URL':
            console.log('URL Reducer')
            return {
                givenURL: action.givenURL,
                id: action.urlObject.id,
                shortendURL: action.urlObject.shortendURL
            } 
        case 'GET_RANDOM_URL':
            console.log('URL Reducer', action.urlObject)
            return {
                givenURL: action.givenURL,
                id: action.urlObject.id,
                shortendURL: action.urlObject.shortendURL
            } 
        default:
            return state;
    }
};

export default URLReducer;