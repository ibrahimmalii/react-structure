const INITIAL_STATE = {
    language: 'ar'
}

export const changeLanguageReducer = (state = INITIAL_STATE, {type, payload}={}) =>{
    switch (type) {
        case 'CHANGE_LANGUAGE':
            return{
                ...state,
                payload
            }
            
        default:
            return state;
            break;
    }
}
