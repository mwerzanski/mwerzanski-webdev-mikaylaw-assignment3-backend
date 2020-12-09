import { postRandomURL, getURL, deleteURL, postSetURL } from '../services/URLService';

export function createRandomURL(type, givenURL, shortendURL) {

    if (shortendURL === '') {
        return async dispatch => {
            let json = await postRandomURL(givenURL);
            dispatch({
                type: type,
                givenURL: givenURL,
                urlObject: json,
            });
        }
    } else {
        return async dispatch => {
            let json = await postSetURL(givenURL, shortendURL);
            dispatch({
                type: type,
                givenURL: givenURL,
                urlObject: json,
            });
        }
    }
}

export function readURL(type, givenURL) {
    return async dispatch => {
        let url = getURL(givenURL);
        console.log(url)
        dispatch({
            type: type,
            givenURL: givenURL,
            urlObject: url,
        })
    }
}

export function removeURL(type, givenURL) {
    return async dispatch => {
        let url = deleteURL(givenURL);
        dispatch({
            type: type,
            givenURL: givenURL,
            urlObject: url,
        })
    }
}