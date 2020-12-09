const URLShortener = 'http://localhost:5002/api/urlShortener/'

export async function postRandomURL(givenURL) {
    let response = await fetch(`${URLShortener}`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({"givenURL": givenURL}),
    });
    let json = await response.json();
    return json
}

export async function getURL(givenURL) {
    let response = await fetch(`${URLShortener}existingURL/${givenURL}`)
    let json = await response.json()
    console.log('get response', json)
    return json
}

export async function deleteURL(givenURL) {
    let response = await fetch(`${URLShortener}existingURL/${givenURL}`)
    console.log('get response', response)
    let json = await response.json()
    return json
}

export async function postSetURL(givenURL, shortendURL) {
    let response = await fetch(`${URLShortener}/setURL`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({"givenURL": givenURL, "shortendURL": shortendURL}),
    });
    let json = await response.json();
    return json
}