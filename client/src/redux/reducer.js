
const initialState = {
    myFavs: [],
    allCharacters: [],
    access: false
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case 'ADD_FAV':
            return {
                ...state,
                myFavs: action.payload,
                allCharacters: action.payload
            };
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavs: action.payload,
                allCharacters: action.payload
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
        case 'SET_ACCESS':
            return {
                ...state,
                access: action.payload
            }
            
        default:
            return state;
    }
}


