const INITIAL_STATE = {
    currentLanguage: 'ar'
};

const languageReducer = (state = INITIAL_STATE, { type, payload }={}) => {

    switch (type) {
        case 'change_language':
            return {
                ...state,
                currentLanguage: payload
            };

        default:
            return state;
    }
}

export default languageReducer;