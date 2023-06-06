const initialState = {
    myFavs: []
}

export default function favsReducer(state = initialState, action) {

    switch(action.type){
        case 'ADD_FAV':
            return {
                ...state,
                myFavs: [...state.myFavs, action.payload]
            };
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavs: state.myFavs.filter(fav => fav.id.toString() !== action.payload)
            };
        default:
            return state;
    }
}


