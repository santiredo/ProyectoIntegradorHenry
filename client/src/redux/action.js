import axios from 'axios';

export const addFav = (character) => {

    const endpoint = 'http://localhost:3002/rickandmorty/fav'
    console.log(character)
    return async (dispatch) => {
        try {
            const result = await axios.post(endpoint, character)
            const data = result.data
            return dispatch({
                type: 'ADD_FAV',
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const removeFav = (id) => {
    const endpoint = `http://localhost:3002/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const result = await axios.delete(endpoint)
            const data = result.data
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data
            })            
        } catch (error) {
            alert(error.message)
        }
    }
}

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order
    }
}

export const setAccess = (access) => {
    return {
        type: 'SET_ACCESS',
        payload: access
    }
}
