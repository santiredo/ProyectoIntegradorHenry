
const initialState = {
    myFavs: [],
    allCharacters: []
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
            const filteredFavs = state.allCharacters.filter(character => character.gender === action.payload)
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
            
        default:
            return state;
    }
}


