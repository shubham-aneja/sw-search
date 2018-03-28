import fetch from 'isomorphic-fetch'

export function api(uri, action = {}) {
    const params = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: action.method || 'GET',
    }
    if (params.method !== 'GET') {
        params.body = JSON.stringify(action.body)
    }
    return fetch(uri, params).then(response => {
        return response.json()
    }).catch(error => {
        throw error
    })
}
