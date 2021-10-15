const INITIAL_STATE = {
    currentLanguage : 'ar'
};

export default function language (state = INITIAL_STATE, action){
    const {type, payload} = action
    
    switch (type) {
        case 'change_language':
            return {
                ...state,
                currentLanguage : payload
            };
    
        default:
            return state;
    }
}