
const initialState = {
    myFavs: [],
    allCharacters: [],
    registeredUsers: JSON.parse(localStorage.getItem('registeredUsers')) || []
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case 'ADD_FAV':
            return {
                ...state,
                myFavs: [...state.myFavs, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavs: state.myFavs.filter(fav => fav.id !== Number(action.payload))
            };
        case 'FILTER':
            let filteredFavs = state.allCharacters.filter(character => character.gender === action.payload);

            if(action.payload === 'ShowAll') filteredFavs = state.allCharacters;
            return {
                ...state,
                myFavs: filteredFavs
            }
        case 'ORDER':
            return {
                ...state,
                myFavs: [...state.allCharacters].sort( (a, b) => {
                    if(action.payload === 'A') return a.id - b.id;
                    return action.payload === 'D' && b.id - a.id;
                })
            }
        case 'REGISTER':
            const updatedUsers = [...state.registeredUsers, action.payload];
            localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
            return {

                ...state,
                registeredUsers: updatedUsers
            }

            
        default:
            return state;
    }
}


